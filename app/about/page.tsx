
// Basic about page
import Image from "next/image";
import ShopNow from "@/public/images/shop_now.jpg"

export default function AboutPage() {

    return (
    <>
      <p>This will be the about page</p>
            <Image
              src={ShopNow}
              alt="Placeholder"
              className="w-full h-auto rounded"
            /> 
    </>
    );
  }