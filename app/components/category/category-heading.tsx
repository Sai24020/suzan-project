
import styles from "@/app/components/category/category.module.css"; // Import the CSS module


export default function CategoryHeading({ children }: { children: string }) {
      return (
            <div className={styles.categoryHeaderContainer}>
                  <p>Browsing results for :</p>
                  <h3 className="text-2xl font-semibold">{children}</h3>
                  <SearchResultsByCategory categoryName={children} />
            </div>
      )
}
