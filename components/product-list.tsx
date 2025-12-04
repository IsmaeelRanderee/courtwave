"use client";

import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });

  return (
    <div className="mt-6 space-y-8">
      
      <div className="flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md rounded-full border border-neutral-200 bg-white px-4 py-2.5
                     text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent"
        />
      </div>

      
      <ul
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4
                   max-w-5xl mx-auto place-items-center"
      >
        {filteredProduct.map((product) => (
          <li key={product.id} className="h-full w-full flex justify-center">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
