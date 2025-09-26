import AddToCart from "@/components/product/add-to-cart";
import ProductImgCtrl from "@/components/product/product-img";
import ProductPrice from "@/components/product/product-price";
import { getProductDetail } from "@/lib/actions/product-action";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { notFound } from "next/navigation";

const ProductDetailPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  if (!slug) notFound();

  const product = await getProductDetail(slug);
  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <ProductImgCtrl images={product.imgUrls} />
          </div>

          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brandName} {product.categoryName}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.noOfReviews} Reviews
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  price={product.price}
                  discount={product.discountPrice}
                  currency={product.currencySymbol}
                  className="rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          <Card className="h-max">
            <CardBody className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <ProductPrice
                  price={
                    product.discountPrice > 0
                      ? product.discountPrice
                      : product.discountPrice
                  }
                  discount={0}
                  currency={product.currencySymbol}
                />
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {product.noOfStock > 0 ? (
                  <Chip color="secondary">In Stock</Chip>
                ) : (
                  <Chip color="danger">Out of Stock</Chip>
                )}
              </div>
              {product.noOfStock > 0 && <AddToCart item={product} />}
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
