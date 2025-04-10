'use client';

import { useEffect, useState } from 'react';
import { Product } from "@/lib/interfaces";
import { CardList } from '@/app/components/product/cards-list';
import styles from "@/app/components/product/product.module.css"; // Import the CSS module

interface SearchResultsByCategoryProps {
  categoryName: string | null;
}

export default function SearchResultsByCategory({ categoryName }: SearchResultsByCategoryProps) {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const total = 24; // just for test purposes

  useEffect(() => {
    if (!categoryName) return;
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        const data = await res.json();
        setProduct(data.products || []);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryName]);

  if (loading) 
  return    //fint bild när loading searching for products
        <div className="flex bg-[url('/images/pngtree-colorful-loading-icon.jpg')] bg-amber-100 bg-center bg-no-repeat bg-cover shadow-md px-6 py-7">
            <p className='shadow-md px-6 py-7 text-3xl font-bold mt-4 mb-4'>Searching for products...</p>
       </div>

  return (
    <div className={styles.categoryHeaderContainer}>
      <div className={`${styles.container} ${styles.containerTablet} ${styles.containerWeb}`}>
        <CardList products={product} totalProducts={total} />
      </div>
    </div>
  );
}
