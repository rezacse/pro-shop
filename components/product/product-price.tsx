import { cn } from "@heroui/react";

type IProps = {
  price: number;
  discount: number;
  currency: string;
  className?: string;
};
const ProductPrice = ({ price, currency, discount, className }: IProps) => {
  const [intValue, floatValue] = price.toString().split(".");
  const [discountIntValue, discountFloatValue] =
    discount > 0 ? discount.toString().split(".") : [];
  return (
    <div className={cn("flex items-center", className)}>
      {(discountIntValue || discountFloatValue) && (
        <p className="line-through text-red-500 pr-2">
          {currency}
          {intValue}.{floatValue.padEnd(2, "0")}
        </p>
      )}
      <p className="text-2xl">
        <span className="text-xs align-super">{currency}</span>
        {discount > 0 ? discountIntValue : intValue}
        <span className="text-xs align-super">
          .
          {discount > 0
            ? discountFloatValue.padEnd(2, "0")
            : floatValue.padEnd(2, "0")}
        </span>
      </p>
    </div>
  );
};

export default ProductPrice;
