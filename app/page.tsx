import Image from "next/image";
import styles from "./page.module.css";
import GlobalTitelWithImage from "./components/header/globalTitelWithImage";
import CategoryBar from "./components/category/category-bar";
import ProductBar from "./components/product/product-bar";
import { CardList } from "./components/product/cards-list";
import { fetchProducts } from "./data-access/actions";
import { Heart, ListCheck, MessageCircle } from "lucide-react";

export default async function Home({ searchParams }: { searchParams: Promise<{ limit: string }> }) {
  const page = (await searchParams).limit;
  const currentPage = Number(page) || 1;
  const { products, total } = await fetchProducts(currentPage, 4);
  
  return (
    <>
    <GlobalTitelWithImage />

    <CategoryBar />

    <ProductBar />
    <span>Totalt: {total} produkter</span>
        <CardList products={products} totalProducts={total} />
    <div className={styles.page}>
      
      <main className={styles.main}>
      

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/products"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Go to ALL PRODUCTS with select Limit
          </a>
          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            LOGIN
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          <Heart/> Go to →
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
         <MessageCircle/> Go to  → 
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
         <ListCheck/> Go to  → 
        </a>
      </footer>
    </div> 
     </>
  );
}
