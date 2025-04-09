"use client";

import React, { useEffect, useState } from 'react'
import { Product } from "@/lib/interfaces";
import { CardList } from '@/app/components/product/cards-list';

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

    if (loading) return <p>Searching for products...</p>
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

                <CardList products={product} totalProducts={total} />
            </main>
        </div>
    )
}
