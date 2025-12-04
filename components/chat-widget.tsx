"use client";

import { useState, useRef, useEffect } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m the CourtWave assistant 👋\nHow can I help you today? (rackets, orders, shipping, sizing, etc.)",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(newMessages);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ??
            "Sorry, something went wrong on my side. Please try again.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn’t reach the server right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center
                   rounded-full bg-black text-white shadow-lg hover:bg-neutral-900
                   transition-colors"
      >
        {isOpen ? "×" : "💬"}
      </button>

      
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 z-40 w-[320px] sm:w-[360px]
                     rounded-3xl border border-neutral-200 bg-white shadow-2xl
                     flex flex-col overflow-hidden"
        >
          
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-50">
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                CourtWave Assistant
              </p>
              <p className="text-xs text-neutral-500">
                Ask me about rackets, orders or shipping.
              </p>
            </div>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-[10px] text-neutral-500">Online</span>
            </span>
          </div>

          
          <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto max-h-80 text-sm bg-white">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`whitespace-pre-wrap rounded-2xl px-3 py-2 max-w-[80%] ${
                    m.role === "user"
                      ? "bg-black text-white rounded-br-sm"
                      : "bg-neutral-100 text-neutral-900 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          
          <form
            onSubmit={handleSend}
            className="border-t border-neutral-200 px-3 py-2 flex items-center gap-2 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-neutral-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isSending || !input.trim()}
              className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white
                         hover:bg-neutral-900 disabled:opacity-60"
            >
              {isSending ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
