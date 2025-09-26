"use client";

import { cn } from "@heroui/react";
import { useState } from "react";
import Image from "next/image";

const ProductImgCtrl = ({ images }: { images: string[] }) => {
  const [imgIndex, setImgIndex] = useState(images.length > 0 ? 0 : -1);

  if (imgIndex < 0) return null;

  return (
    <div className="space-y-4">
      <Image
        src={images[imgIndex]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setImgIndex(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              imgIndex === index && "border-orange-500"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImgCtrl;
