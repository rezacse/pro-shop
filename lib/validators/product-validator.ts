import { formatNumberWithDecimal } from "@/lib/utils";
import { z } from "zod";

const twoDecimal = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly 2 decimal places"
  );

export const productInsertSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  detail: z.string().nullable(),
  noOfStock: z.number(),
  imgUrls: z.array(z.string()).min(1, "Need at least 1 image"),
  isFeatured: z.boolean(),
  bannerImg: z.string().nullable(),
  isDraft: z.boolean(),
  price: twoDecimal,
  discountAmount: twoDecimal,
  discountIsPercentage: z.boolean(),
  productCategoryID: z.string().min(1, "Select a category"),
  countryID: z.string().min(1, "Select Country"),
  currencyID: z.string().min(1, "Select Currency"),
  productBrandID: z.string().nullable(),
});

export const productListSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  detail: z.string().nullable(),
  noOfStock: z.number(),
  imgUrls: z.array(z.string()).min(1, "Need at least 1 image"),
  isFeatured: z.boolean(),
  bannerImg: z.string().nullable(),
  isDraft: z.boolean(),
  price: z.number(),
  discountPrice: z.number(),
  discountIsPercentage: z.boolean(),
  productCategoryID: z.string().min(1, "Select a category"),
  countryID: z.string().min(1, "Select Country"),
  currencyID: z.string().min(1, "Select Currency"),
  productBrandID: z.string().nullable(),
});

// export const productListSchema = z.object({
//   name: z.string().min(3, "Name must be at least 3 characters"),
//   slug: z.string().min(3, "Slug must be at least 3 characters"),
//   description: z.string().min(3, "Description must be at least 3 characters"),
//   detail: z.string().nullable(),
//   noOfStock: z.number(),
//   imgUrls: z.array(z.string()).min(1, "Need at least 1 image"),
//   isFeatured: z.boolean(),
//   bannerImg: z.string().nullable(),
//   isDraft: z.boolean(),
//   price: z.number(),
//   discountPrice: z.number(),
//   discountIsPercentage: z.boolean(),
//   productCategoryID: z.string().min(1, "Select a category"),
//   countryID: z.string().min(1, "Select Country"),
//   currencyID: z.string().min(1, "Select Currency"),
//   productBrandID: z.string().nullable(),
// });

export const cartItemSchema = z.object({
  productID: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  quantity: z
    .number()
    .int()
    .nonnegative("Quantity must be greater than 0 (zero)"),
  img: z.string().min(1, "Image is required"),
  price: twoDecimal,
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: twoDecimal,
  totalPrice: twoDecimal,
  shippingPrice: twoDecimal,
  taxPrice: twoDecimal,
  sessionCartID: z.string().min(1, "Session cart id is required"),
  userID: z.string().optional().nullable(),
});
