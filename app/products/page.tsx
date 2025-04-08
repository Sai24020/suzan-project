
// Basic product page

//import PaginationNav from "";
import { API_ENDPOINT } from "@/app/data-access/endpoints";
import { fetchFromAPI } from "@/app/data-access/actions";
import { Metadata } from "next";

import { Products } from "@/lib/interfaces";
import { fetchProducts } from "@/app/data-access/actions";
//import { CardList } from "";


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
      <>
      
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 mx-4 my-8">
          <div>
        <h1 className="text-3xl font-bold mt-4">Products Collection</h1>
      <img
        src="https://res.cloudinary.com/demo/image/upload/f_auto/q_auto/w_1800,ar_3:1,c_fill/docs/colored_pencils"
        alt="Placeholder"
        className="w-full h-auto rounded"
      /> 
                <CardList products={data.products} totalProducts={total} />
                </div>
        </ul>
<div className="flex flex-row">
        <PaginationNav
          path="products"
          pagesCount={total}
          limit={parsedLimit}
          skip={parsedSkip}
        />
        <p>Showing limit:{parsedLimit} av products, skip:{parsedSkip}, page:{parsedSkip+1}</p>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div className="flex items-center justify-center w-1/2 h-1/2 mx-auto mb-32 mt-32 bg-red-100 rounded-lg shadow-md text-red-500 text-center">Something went wrong while loading products.</div>;
  }
}
