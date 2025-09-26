"use server";

import { auth } from "@/auth";
import { formatError } from "../utils";
import { CartResp } from "@/types/product";

export async function addItemToCart(): Promise<CartResp> {
  try {
    const session = await auth();
    if (!session?.user) {
      return {
        isSuccess: false,
        message: "Please login",
        noOfItem: 0,
      } as CartResp;
    }

    return {
      isSuccess: true,
      message: "Added to cart",
      noOfItem: 0,
    } as CartResp;
  } catch (err) {
    return {
      isSuccess: false,
      message: await formatError(err),
      noOfItem: 0,
    } as CartResp;
  }
}

export async function removeItemFromCart(productID: string): Promise<CartResp> {
  try {
    const session = await auth();
    if (!session?.user) {
      return {
        isSuccess: false,
        message: "Please login",
        noOfItem: 0,
      } as CartResp;
    }

    return {
      isSuccess: true,
      message: "Added to cart",
      noOfItem: 0,
    };
  } catch (err) {
    return {
      isSuccess: false,
      message: await formatError(err),
      noOfItem: 0,
    };
  }
}
