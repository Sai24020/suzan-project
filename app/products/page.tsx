
// Basic product page

import { API_ENDPOINT } from "@/app/data-access/endpoints";
import { fetchFromAPI } from "@/app/data-access/actions";
import { Metadata } from "next";
import { Products } from "@/lib/interfaces";
import { fetchProducts } from "@/app/data-access/actions";
import { CardList } from "../components/product/cards-list";
import PaginationNav from "../components/pagination/pagNav";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Product Listing",
  description: "Products list from the product API",
};

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { skip?: string; limit?: string }; // Fixing incorrect promise type
}) {
  // Destructure searchParams and parse them safely
  const parsedSkip = Number(searchParams?.skip ?? "0");
  const parsedLimit = Number(searchParams?.limit ?? "8");

const { total } = await fetchProducts(parsedSkip, parsedLimit);
  try {
    // Fetch data from API
    const data = await fetchFromAPI<Products>(
      `${API_ENDPOINT}?limit=${parsedLimit}&skip=${parsedSkip}`
    );
console.log(data);
    // Handle API errors
    if (!data || "message" in data) {
      console.error("Error fetching data:", data?.message);
      return <div className="text-red-500 text-center">Error: {data?.message || "Failed to load data"}</div>;
    }

    return (
      <div className="bg-gradient-to-tl to-gray-600 rounded-2xl">
      
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 mx-4 my-8 ">
          <div>
        <h1 className="flex bg-[url('/images/shop_now.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-6 py-7 text-3xl font-bold mt-4 mb-4">Products Collection</h1>

                <CardList products={data.products} totalProducts={total} />
                </div>
        </ul>
<div className="flex flex-row">
<ul className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 mx-auto my-8 mb-34">

<p>Showing limit:{parsedLimit} av products, skip:{parsedSkip}, page:{parsedSkip+1}</p>

        <PaginationNav
          path="products"
          pagesCount={total}
          limit={parsedLimit}
          skip={parsedSkip}
        />
      
        </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div className="flex items-center justify-center w-1/2 h-1/2 mx-auto mb-32 mt-32 bg-red-100 rounded-lg shadow-md text-red-500 text-center">Something went wrong while loading products.</div>;
  }
}
