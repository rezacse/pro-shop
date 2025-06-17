import { productInsertSchema } from "@/components/validators/product-validator";
import { z } from "zod";

export type ProductListItem = z.infer<typeof productInsertSchema> & {
  //imgUrls: string[];
  id: string;
  categoryName: string;
  brandName: string;
  rating: number;
  noOfReviews: number;
  currencySymbol: string;
  createdAt: Date;
};
