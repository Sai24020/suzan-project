import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/app/components/ui/card";
import { Product } from "@/lib/interfaces";
import Ratings from "../ui/ratings";
import Image from "next/image";
import { Button } from "../ui/button";


export async function ProductDetailsCard({
  product,
}: {
  product: Promise<Product>;
}) {
  const productDetails = await product;
  return (
    <Card className=" max-w-[120ch] mx-auto">
      <CardHeader className="text-center">
        <CardTitle>
          <h1 className="font-bold text-xl">{productDetails.title}</h1>
        </CardTitle>
        <CardDescription>Category: {productDetails.category}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 grid grid-cols-2">
        <div className="flex justify-center">
          <Image
            className="w-full max-w-[260px] px-4 object-contain"
            src={productDetails.thumbnail}
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="grid gap-2 px-4">
          <div className="flex gap-2 items-center">
            <span>Rating:</span> <Ratings rating={productDetails.rating} />
          </div>
          <p className="text-pretty">{productDetails.description}</p>

        </div>
        </CardContent>
        <CardFooter className="items-center list-none space-x-4 flex-1 justify-end flex columns-2 gap-4 px-4 algin-text-center">

        <li className="text-left text-4xl ml-15 mr-15 text-red-600 font-semibold">
            ${productDetails.price}
          </li>
          
          <Button className="p-3 text-left text-4xl ml-15 mr-15 bg-gray-700 cursor-pointer hover:bg-gray-500 hover:text-black-300 text-white font-semibold">ADD</Button>

        <li className="text-right font-semibold text-2xl text-green-700 ml-15 mr-6">
            %{productDetails.discountPercentage}
        </li>
    
        </CardFooter>
     
    </Card>
  );
}
