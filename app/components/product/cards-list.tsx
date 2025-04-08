'use client';

import { Product } from "@/lib/interfaces";
import { Card } from "./card";
import styles from './card.module.css'; // Import the CSS module

// Lista med produkter
export function CardList({ products }: { products: Product[]; totalProducts: number }) {

  return (
    <div className={styles.cardListContainer}>
      <ul className={`${styles.cardListGrid} ${styles.cardListGrid1} sm:${styles.cardListGrid2} lg:${styles.cardListGrid3} xl:${styles.cardListGrid4}`}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
      </div>
  );
}
