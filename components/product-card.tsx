"use client";

import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
<Card
  className="group flex h-full flex-col overflow-hidden
             rounded-2xl border border-neutral-200 bg-white
             shadow-sm hover:shadow-xl hover:-translate-y-1
             transition-all duration-300 max-w-[320px] mx-auto"
>

        
        {product.images && product.images[0] && (
          <div
            className="relative h-40 w-full 
                       bg-white
                       flex items-center justify-center border-b border-neutral-200"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        
        <CardHeader className="px-4 pt-3 pb-1">
          <CardTitle className="text-base font-semibold text-neutral-900 line-clamp-1">
            {product.name}
          </CardTitle>
        </CardHeader>

        
        <CardContent className="px-4 pb-4 flex flex-col gap-2 flex-1">
          {product.description && (
            <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
              {product.description}
            </p>
          )}

          
          <div className="mt-auto flex items-center justify-between gap-3 pt-2">
            {price && price.unit_amount && (
              <p className="text-base font-semibold text-neutral-900">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}

            <Button
              className="bg-black text-white px-3 py-1.5 text-xs font-medium rounded-full
                         hover:bg-neutral-900 group-hover:ring-2 group-hover:ring-black/5"
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
