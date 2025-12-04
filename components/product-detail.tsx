"use client";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    if (!price || !price.unit_amount) return;

    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  const onRemoveItem = () => {
    removeItem(product.id);
  };

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">

          
          {product.images && product.images[0] && (
            <div className="relative w-full max-w-[420px] aspect-[1/1.2] rounded-3xl 
                border border-neutral-200 shadow-md overflow-hidden mx-auto">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          )}

          
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#0A66FF] uppercase">
                Padel Racket
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {product.name}
              </h1>
              {product.description && (
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {price && price.unit_amount && (
              <p className="text-2xl font-semibold text-neutral-900">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}

            
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-600">Quantity</span>
                <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white shadow-sm">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full"
                    onClick={onRemoveItem}
                  >
                    –
                  </Button>
                  <span className="w-10 text-center text-sm font-semibold">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full"
                    onClick={onAddItem}
                  >
                    +
                  </Button>
                </div>
              </div>

              <Button
                className="w-full md:w-auto rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-neutral-900"
                onClick={onAddItem}
              >
                Add to Cart
              </Button>
            </div>

            
            <div className="pt-4 border-t border-neutral-200">
              <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                <li>• Designed for players who demand power and precision.</li>
                <li>• Ideal for competitive club and tournament play.</li>
                <li>• Ships within 2–4 business days.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
