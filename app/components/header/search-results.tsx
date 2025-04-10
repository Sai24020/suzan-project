"use client";

import React, { useEffect, useState } from 'react'
import { Product } from "@/lib/interfaces";
import { CardList } from '@/app/components/product/cards-list';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    default: 'SEARCH', // a default is required when creating a template
    template: '%s | SEARCH'
    },
  }

interface searchResultsProps {
    query: string | null;
}

export default function SearchResults({ query }: searchResultsProps) {
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
     const total = 24; //just for test purpose, properply execute and change in the future
    

    useEffect(() => {
        // hämta från API:et när query uppdateras
        if (!query) return; // om ingen query - lämna funktionen
        const fetchProducts = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                const data = await res.json();
                setProduct(data.products || []);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();

    }, [query])

    if (loading) return <div className="flex bg-[url('/images/pngtree-colorful-loading-icon.jpg')] bg-amber-100 bg-center bg-no-repeat bg-cover shadow-md px-6 py-7"><p className='shadow-md px-6 py-7 text-3xl font-bold mt-4 mb-4'>Searching for products...</p></div>
    return (
        <div className="bg-gradient-to-tl to-gray-600 rounded-2xl">
      
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 mx-4 my-8 ">
          <div>
       

        <CardList products={product} totalProducts={total} />
                </div>
        </ul>
                
          
        </div>
    )
}
