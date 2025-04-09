// Basic product page    <p>This will be the products page</p>
/* 
import { Product } from "@/lib/interfaces"
import { fetchProduct } from "@/app/data-access/actions"
import Image from "next/image"
import type { Metadata } from 'next'
import Ratings from "@/app/components/ui/ratings"

type Props = {
    params: Promise<{ id: number }>;
}

// Metadata (dynamisk - funkar bara i server komponenter)
export const generateMetadata = async ({ params }: Props
): Promise<Metadata> => {
    // await params to get id and fetch the product by id
    const { id } = await params;
    const product: Product = await fetchProduct(id);

    const {
        title,
        brand,
        price,
    } = product;

    return {
        title: `${title}`,
        description: `Buy ${title} from ${brand}. Price: $${price}`,
    }
}

// More info about metadata: 
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export default async function ProductPage({ params }: Props) {
    // await params to get id
    const { id } = await params;
    // fetch product by id
    const product: Product = await fetchProduct(id);
    // Definition of done: image, name, description and price
    const {
        title,
        description,
        price,
        images: [image],
        // category,
        // warrantyInformation,
        // shippingInformation,
        // returnPolicy
    } = product;

    return (
        <main className="text-card-foreground shadow  text-gray-800 bg-gradient-to-tl to-gray-600 rounded-2xl grid items-center justify-items-center w-full px-[10vw] gap-4 md:grid-cols-[1fr_1fr]">
            <div className="bg-card">
                <header className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-2xl font-bold p-2 bg-gradient-to-tl to-amber-300 rounded-2xl leading-none tracking-tight">{ title }</h2>
                </header> 
                <Image
                    className="w-full max-w-[260px] px-4 object-contain"
                    src={product.thumbnail}
                    alt=""
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <section className=" grid gap-2 px-4 border-b pb-4 border-gray-400">
          <div className="flex gap-2 items-center">
            <span className="text-xl text-yellow-200">Rating:</span> <Ratings rating={Ratings.rate} />
          </div>
                <p className="text-m text-muted-foreground text-black">{ description }</p>
                <footer>
            <dl className="text-2xl  pb-4 flex items-center p-6 pt-0">
                    <dt className="sr-only">Price:</dt>
                    <dd className="text-center text-2xl text-red-600" >${ price }</dd>
                </dl>
            </footer>
            </section> 

        </main>
    )
}*/
import { fetchProduct } from "@/app/data-access/actions";
import { ProductDetailsCard } from "@/app/components/product/product-details";
import { Suspense } from "react";

//get the dynamic id from the page url and use that to fetch products
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: number}>;
}) {
  //since params is a promise we have to await it first
  const { id } = await params;
  const data = fetchProduct(id);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailsCard product={data} />
    </Suspense>
  );
}
