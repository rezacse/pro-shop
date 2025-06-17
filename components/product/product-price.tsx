import { cn } from "@heroui/react";

const ProductPrice = ({
  price,
  currency,
  className,
}: {
  price: string;
  currency: string;
  className?: string;
}) => {
  const [intValue, floatValue] = price.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">{currency}</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
