"use client";

import { ProductListItem } from "@/types/product";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import appPath from "@/app/path";
import ProductPrice from "./product-price";

type IProps = {
  product: ProductListItem;
};

const ProductCard = ({ product }: IProps) => {
  return (
    <Card isPressable shadow="sm" className="w-full max-w-sm">
      <CardBody className="overflow-visible p-0">
        <Link href={appPath.productDetail(product.slug)}>
          <Image
            alt={product.name}
            //className="w-full object-cover h-[140px]"
            src={product.imgUrls[0]}
            width={300}
            height={300}
            //shadow="sm"
            //radius="lg"
            priority={true}
            //width="100%"
          />
        </Link>
      </CardBody>
      <CardFooter className="grid px-4 gap-2">
        <div className="text-xs text-left">{product.brandName}</div>
        <Link href={appPath.productDetail(product.slug)} className="text-left">
          {product.name}
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product.noOfStock > 0 ? (
            <ProductPrice
              price={product.price}
              currency={product.currencySymbol}
            />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
