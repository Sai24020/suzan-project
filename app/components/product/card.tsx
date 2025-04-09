'use client';

import { Product } from "@/lib/interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from './card.module.css'; // Import the CSS module

// Enskilt produktkort
export function Card({ product }: { product: Product }) {

  return (
    <li className={styles.cardContainer}>
            <div className={styles.cardTitelContainer}>
            <h2 className={styles.cardTitle}>{product.title}</h2>
            </div>
      <div className={styles.cardImageContainer}>
        <Link href={`/products/${product.id}`}>
          <Image
            className={styles.cardImage}
            src={product.thumbnail}
            width={150}
            height={150}
            alt={`Bild ${product.title}`}
          />
        </Link>
 
      </div>
        <div className={styles.cardPriceContainer}>
          <p className={styles.cardPrice}>${product.price}</p>
          <span className={styles.cardDiscount}>{product.discountPercentage}%</span>
        </div>
  
    </li>
  );
}