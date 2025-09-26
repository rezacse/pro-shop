"use server";

//import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db";
import { ProductListItem } from "@/types/product";
import { getDiscountAmount } from "../utils";

export async function getLatestProducts(): Promise<ProductListItem[]> {
  const data = await prisma.product.findMany({
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
        name: p.name,
        slug: p.slug,
        description: p.description,
        detail: p.detail,
        noOfStock: p.noOfStock,
        imgUrls: p.imgUrls,
        isFeatured: p.isFeatured,
        bannerImg: p.bannerImg,
        discountIsPercentage: p.discountIsPercentage,
        productCategoryID: p.productCategoryID,
        countryID: p.countryID,
        currencyID: p.currencyID,
        productBrandID: p.productBrandID,
        id: p.id,
        createdAt: p.createdAt,
        price: Number(p.price),
        discountPrice: getDiscountAmount(
          Number(p.price),
          Number(p.discountAmount),
          Number(p.discountIsPercentage)
        ),
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

export async function getProductDetail(
  slug: string
): Promise<ProductListItem | null> {
  const p = await prisma.product.findFirst({
    where: { isArchived: false, slug: slug },
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
  });

  if (!p) return null;

  const product = {
    name: p.name,
    slug: p.slug,
    description: p.description,
    detail: p.detail,
    noOfStock: p.noOfStock,
    imgUrls: p.imgUrls,
    isFeatured: p.isFeatured,
    bannerImg: p.bannerImg,
    discountIsPercentage: p.discountIsPercentage,
    productCategoryID: p.productCategoryID,
    countryID: p.countryID,
    currencyID: p.currencyID,
    productBrandID: p.productBrandID,
    id: p.id,
    createdAt: p.createdAt,
    price: Number(p.price),
    discountPrice: getDiscountAmount(
      Number(p.price),
      Number(p.discountAmount),
      Number(p.discountIsPercentage)
    ),
    brandName: p.productBrand.name,
    categoryName: p.productCategory.name,
    currencySymbol: p.currency.symbol,
    noOfReviews: p._count.reviews,
    rating: p._count.reviews,
    isDraft: false,
  } as ProductListItem;

  return product;
  //   return convertToPlainObject(products);
}
