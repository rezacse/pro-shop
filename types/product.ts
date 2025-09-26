import {
  cartItemSchema,
  insertCartSchema,
  productListSchema,
} from "@/lib/validators/product-validator";
import { z } from "zod";

export type ProductListItem = z.infer<typeof productListSchema> & {
  //imgUrls: string[];
  name: string;
  slug: string;
  description: string;
  detail: string;
  noOfStock: number;
  imgUrls: string[];
  isFeatured: boolean;
  bannerImg: string;
  isDraft: boolean;
  price: number;
  discountPrice: number;
  discountIsPercentage: boolean;
  productCategoryID: number;
  countryID: number;
  currencyID: number;
  productBrandID: number;
  id: string;
  categoryName: string;
  brandName: string;
  rating: number;
  noOfReviews: number;
  currencySymbol: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;

export type CartResp = {
  isSuccess: boolean;
  message: string;
  noOfItem: number;
};
