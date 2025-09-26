"use client";
import { useTransition } from "react";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { Plus, Minus, Loader } from "lucide-react";
import { ProductListItem } from "@/types/product";
//import { useToast } from "@/hooks/use-toast";
//import { ToastAction } from "@/components/ui/toast";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart-action";
import appPath from "@/app/path";

const AddToCart = ({ item }: { item: ProductListItem }) => {
  const router = useRouter();
  //const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    //startTransition(async () => {
    const res = await addItemToCart();

    if (!res.isSuccess) {
      addToast({
        //variant: "destructive",
        description: res.message,
      });
      return;
    }

    // Handle success add to cart
    addToast({
      description: res.message,
      endContent: (
        <Button
          size="sm"
          variant="flat"
          onPress={() => router.push(appPath.cart())}
        >
          View
        </Button>
      ),
      // action: (
      //   <ToastAction
      //     className="bg-primary text-white hover:bg-gray-800"
      //     altText="Go To Cart"
      //
      //   >
      //     Go To Cart
      //   </ToastAction>
      //),
    });
    //});
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.id);

      addToast({
        description: res.message,
      });

      return;
    });
  };

  // Check if item is in cart
  //   const existItem =
  //     cart && cart.items.find((x) => x.productID === item.id);

  return (
    <Button className="w-full" type="button" onPress={handleAddToCart}>
      {isPending ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <Plus className="w-4 h-4" />
      )}{" "}
      Add To Cart
    </Button>
  );
  // existItem ? (
  //     <div>
  //       <Button type="button" variant="bordered" onPress={handleRemoveFromCart}>
  //         {isPending ? (
  //           <Loader className="w-4 h-4 animate-spin" />
  //         ) : (
  //           <Minus className="w-4 h-4" />
  //         )}
  //       </Button>
  //       <span className="px-2">{existItem.quantity}</span>
  //       <Button type="button" variant="bordered" onPress={handleAddToCart}>
  //         {isPending ? (
  //           <Loader className="w-4 h-4 animate-spin" />
  //         ) : (
  //           <Plus className="w-4 h-4" />
  //         )}
  //       </Button>
  //     </div>
  //   ) : ( );
};

export default AddToCart;
