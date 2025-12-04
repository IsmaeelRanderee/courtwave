import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  // Never crash the build if the key is missing – just respond with an error
  if (!apiKey) {
    console.error("Missing GROQ_API_KEY env var");
    return NextResponse.json(
      { error: "Chat service is not configured on this deployment." },
      { status: 500 }
    );
  }

  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    // 1) Get live products from Stripe
    const products = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
      limit: 50,
    });

    const catalog = products.data.map((p) => {
      const price = p.default_price as Stripe.Price | null;
      const amount = price?.unit_amount
        ? (price.unit_amount / 100).toFixed(2)
        : null;

      return {
        id: p.id,
        name: p.name,
        description: p.description,
        brand: p.metadata?.brand ?? undefined,
        level: p.metadata?.level ?? undefined,
        shape: p.metadata?.shape ?? undefined,
        price: amount,
        currency: price?.currency?.toUpperCase(),
        active: p.active,
      };
    });

    const catalogText = JSON.stringify(catalog, null, 2);

    // 2) Call Groq HTTP API directly – no SDK
    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `
You are CourtWave's friendly AI assistant.

You have ACCESS to the LIVE product catalog below.
It is the ONLY source of truth for what is in stock.

CATALOG (JSON):
${catalogText}

RULES:
- Only say a racket is in stock if you can find a clear match in this catalog.
- If a user asks for a racket that is NOT listed, say it is not currently available and suggest similar options from the catalog.
- When suggesting products, mention the exact racket name and price.
- You can answer other padel questions in general, but anything about availability/pricing MUST be based on the catalog.
- Be concise, modern, and helpful.
              `.trim(),
            },
            ...messages,
          ],
          temperature: 0.5,
        }),
      }
    );

    if (!groqRes.ok) {
      const text = await groqRes.text();
      console.error("Groq API error:", groqRes.status, text);
      return NextResponse.json(
        { error: "Groq API error" },
        { status: 500 }
      );
    }

    const data = await groqRes.json();
    const reply: string =
      data?.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
