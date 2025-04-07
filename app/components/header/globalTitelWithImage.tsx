"use client";
import { useState, useEffect } from 'react';

/** Tycker om att vissa olika images titel under header i min websida**/
export default function GlobalTitelWithImage() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        'https://res.cloudinary.com/demo/image/list/cc0_ecommerce.json'
      );
      const json = await response.json();
      setImages(json.resources);
    }
    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
    <header className="text-center mb-6">
      <h1 className="text-3xl font-bold mt-4">Enjoy a weekly selection of our favorite collection</h1>
        {/*<img
        src="https://res.cloudinary.com/demo/image/upload/sunset_lake.jpg"    /*lip med dropshado efect    src="https://res.cloudinary.com/demo/image/upload/co_rgb:483d8b,e_shadow:50,x_60,y_-60/docs/rmv_bgd/lipstick-png"* */
        /*alt="Placeholder"                                                    /*lip orignal med shado src="https://res.cloudinary.com/demo/image/upload/e_dropshadow:azimuth_220;elevation_40;spread_20/docs/rmv_bgd/lipstick-png"*/}
       {/* className=" bg-center bg-no-repeat bg-cover shadow-md px-6 py-7"/>*/}
      </header>
      
      <section className="my-12 text-center">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {images.slice(5, 11).map((image) => (
            <div key={image.public_id} className="bg-white shadow-lg rounded-lg p-4">
                <img
                  alt=""
                  src={`https://res.cloudinary.com/demo/image/upload/f_auto/q_auto/w_300,h_200,c_fill,g_auto/${image.public_id}`}
                  className="rounded"
                />
              {/*<h3 className="text-xl font-bold mt-2">{image.public_id.replace(/_/g, ' ')}</h3>*/}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}