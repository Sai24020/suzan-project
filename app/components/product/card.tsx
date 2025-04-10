'use client';

import { Product } from "@/lib/interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from './card.module.css'; // Import the CSS module
import { FaCartPlus, FaHeart, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Button } from "../ui/button";

// Enskilt produktkort
export function Card({ product }: { product: Product }) {

  return (
    <li className={styles.cardContainer}>    
      <div className={styles.cardImageContainer}> 
      <h2 className={styles.cardTitle}>{product.title}</h2>
         <span className={styles.cardDiscount}>{product.discountPercentage}%</span>
        <Link href={`/products/${product.id}`}>              
          <Image
            className={styles.cardImage}
            src={product.thumbnail}
            width={150}
            height={150}
            alt={`Bild ${product.title}`}
          />
        </Link>
        <ul className={styles.cardBrand}><li className="ml-1 mr-1">{product.brand}</li></ul>

        <p className={styles.cardPrice}>${product.price}</p>
        <ul className="flex ">
        <span className="text-white"> . </span>
      <li className="rounded bg-blue-700 text-amber-300 hover:bg-blue-400 text-center">
      <Button className="ml-2">
            <FaPlusCircle /> 
      </Button>
      </li>
      <span>1</span>
      <li className="rounded bg-blue-700 text-amber-300 hover:bg-blue-400 text-center">
      <Button className="ml-2">
            <FaMinusCircle /> 
      </Button>
      </li>
      <span className="text-white"> . </span>
      <li className="rounded bg-blue-700 text-amber-300 hover:bg-blue-400 text-center">
      <Button className="">
            ADD TO CART <FaCartPlus /> 
      </Button>
      </li>
      </ul>
      </div>
    </li>
  );
}