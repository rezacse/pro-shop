import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product-action";
//import { ProductListItem } from "@/types/product";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <ProductList
      products={latestProducts as []}
      title="New Arrivals"
      limit={4}
    />
  );
};

export default HomePage;
