export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "ProShops";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Your favorite online shop";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT);
export const signInDefaultValues = {
  email: process.env.EMAIL || "",
  password: process.env.PASSWORD || "",
};

export const signUpDefaultValues = {
  name: process.env.NAME || "user",
  email: process.env.EMAIL || "user@email.com",
  password: process.env.PASSWORD || "Admin123@",
  confirmPassword: process.env.CONFIRM_PASSWORD || "Admin123@",
};
