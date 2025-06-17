import { ProductListItem } from "@/types/product";
import ProductCard from "./product-card";

const ProductList = ({
  products,
  title,
}: {
  products: ProductListItem[];
  title?: string;
  limit: number;
}) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {products.length > 0 && (
        <div className="grid gid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:gird-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
