'use client';
import {
   FaTshirt,
    FaCouch, 
    FaAppleAlt, 
    FaCoffee,
     FaDesktop,
       FaShoePrints, 
        FaPhoneAlt, 
        FaMotorcycle,
         FaSpa,
          FaMobileAlt,
           FaBasketballBall,
            FaGlasses, 
            FaTabletAlt,
             FaTshirt as FaTops, 
             FaCar,
              FaKhanda,
               FaRss, 
               FaGem,
               FaChair,
               FaGift,
               FaLock,
   FaBolt, 
   FaLaptop,
   FaHardHat,
   FaPastafarianism,
   FaClock,
   FaSnowflake,
   FaStar,
   FaBed,
} from "react-icons/fa";

import { useState } from "react";

import styles from "@/app/components/2-category-bar/category-bar.module.css"; // Import the CSS module

export default function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <section className={styles.categoryBarContainer}>
        <div className={styles.categoryBarHeader}>
        <div className={`${styles.container} ${styles.containerMd} ${styles.containerLg} self-start`}>
        <div className={`${styles.redBox} ${styles.redBoxMd} ${styles.redBoxLg}`}></div>
            <h2 className={styles.categoryBarTitle}>Categories</h2>
          </div>
          <p className={styles.categoryBarSubheading}>Browse By Category</p>
        </div>
        <div className={styles.categoryBtnContainer}>
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Beauty"
            icon={<FaGift  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="fragrances"
            icon={<FaStar className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="furniture"
            icon={<FaChair  className={styles.categoryBtnIcon} />}
          /> 

          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="groceries"
            icon={<FaAppleAlt  className={styles.categoryBtnIcon} />}
          />
                    <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Home-Decoration"
            icon={<FaBed  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Kitchen-Accessories"
            icon={<FaCoffee  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Laptops"
            icon={<FaLaptop  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Mens-Shirts"
            icon={<FaTshirt  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Mens-Shoes"
            icon={<FaShoePrints  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Mens-Watches"
            icon={<FaClock  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Mobile-Accessories"
            icon={<FaPhoneAlt  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Motorcycle"
            icon={<FaMotorcycle  className={styles.categoryBtnIcon} />}
          />
                    <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Skin-Care"
            icon={<FaSpa   className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Smartphones"
            icon={<FaMobileAlt   className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Sports-Accessories"
            icon={<FaBasketballBall className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Sunglasses"
            icon={<FaGlasses className={styles.categoryBtnIcon} />}
          />
                    <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Tablets"
            icon={<FaTabletAlt  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Tops"
            icon={<FaTops   className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Vehicle"
            icon={<FaCar  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Womens-Bags"
            icon={<FaHardHat  className={styles.categoryBtnIcon} />}
          />
                    <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Womens-Dresses"
            icon={<FaSnowflake  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Womens-Jewellery"
            icon={<FaGem  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Womens-Shoes"
            icon={<FaShoePrints  className={styles.categoryBtnIcon} />}
          />
          <CategoryBtn
            onSelect={setSelectedCategory}
            categoryName="Womens-Watches"
            icon={<FaClock  className={styles.categoryBtnIcon} />}
          />
        </div>
      </section>
      {selectedCategory && (
        <CategoryHeading >
          {selectedCategory}
        </CategoryHeading>
      )}
    </>
  );
}
