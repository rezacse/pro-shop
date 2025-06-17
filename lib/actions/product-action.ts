"use server";

//import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { dbContext } from "@/db";
import { ProductListItem } from "@/types/product";

export async function getLatestProducts(): Promise<ProductListItem[]> {
  const data = await dbContext.product.findMany({
    where: { isArchived: false },
    take: LATEST_PRODUCTS_LIMIT,
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      detail: true,
      noOfStock: true,
      price: true,
      isFeatured: true,
      discountAmount: true,
      discountIsPercentage: true,
      imgUrls: true,
      countryID: true,
      currencyID: true,
      productBrandID: true,
      productCategoryID: true,
      bannerImg: true,
      createdAt: true,
      productCategory: { select: { name: true } },
      productBrand: { select: { name: true } },
      currency: { select: { symbol: true } },
      _count: { select: { reviews: true } },

      //rating: { select: { reviews: true } },
    },
    orderBy: { createdAt: "asc" },
  });

  const products = data.map(
    (p) =>
      ({
        ...p,
        price: p.price.toString(),
        discountAmount: p.discountAmount.toString(),
        brandName: p.productBrand.name,
        categoryName: p.productCategory.name,
        currencySymbol: p.currency.symbol,
        noOfReviews: p._count.reviews,
        rating: p._count.reviews,
        isDraft: false,
      } as ProductListItem)
  );

  return products;
  //   return convertToPlainObject(products);
}
