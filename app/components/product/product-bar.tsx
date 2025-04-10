'use client';
import {
  FaTablet,
  FaTshirt,
  FaChair,
  FaShower,
  FaGlasses,
  FaCarSide,
} from "react-icons/fa";

import { useState } from "react";
import styles from "@/app/components/product/product.module.css"; // Import the CSS module

export default function ProductBar() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
<section className={styles.productBarContainer}>
<div className={styles.productBarHeader}>
    <div className={`${styles.container} ${styles.containerMd} ${styles.containerLg} self-start`}>
        <div className={`${styles.redBox} ${styles.redBoxMd} ${styles.redBoxLg}`}>
        </div>
             <h2 className={styles.productBarTitle}>Products</h2>
        </div>
     <p className={styles.productBarSubheading}>Total of Products:</p>
     <span></span>
</div>
</section>
</>
  )
}