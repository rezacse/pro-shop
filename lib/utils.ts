import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(num: number): string {
  const [intVal, decimalVal] = num.toString().split(".");
  return decimalVal ? `${intVal}.${decimalVal.padEnd(2, "0")}` : `${intVal}.00`;
}

export function getDiscountAmount(
  original: number,
  discount: number,
  isPercentage: number
): number {
  if (!discount) return 0;

  if (!isPercentage) return original - discount;

  return Math.round((original - original * (discount / 100)) * 100) / 100;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function formatError(err: any) {
  if (err.name === "ZodError") {
    const fieldErrors = Object.keys(err.errors).map(
      (f) => err.errors[f].message
    );
    return fieldErrors.join(". ");
  } else if (
    err.name === "PrismaClientKnownRequestError" &&
    err.code === "P2002"
  ) {
    const field = err?.meta?.target ? err.meta.target[0] : "Field";
    return `${field.charAt(0).toUpperCase()}${field.slice(1)} already exists`;
  } else {
    return typeof err.message === "string" ? err.message : JSON.stringify(err);
  }
}

export function round2D(value: string | number) {
  if (typeof value === "number") {
    return Math.round(((value + Number.EPSILON) * 100) / 100);
  } else if (typeof value === "string") {
    const _val = Number(value);
    return Math.round(((_val + Number.EPSILON) * 100) / 100);
  } else {
    throw new Error("Value is not a valid input");
  }
}
