'use client';

import { ReactElement } from "react";
import styles from "@/app/components/category/category.module.css"; // Import the CSS module

export default function CategoryBtn({
  icon,
  categoryName,
  onSelect
}: {
  icon: ReactElement;
  categoryName: string;
  onSelect?: (category: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect?.(categoryName)}
      className={styles.categoryBtnContainer}
    >
      <span className={styles.categoryBtnIcon}>
        {icon}
      </span>
      {categoryName}
    </button>
  );
}