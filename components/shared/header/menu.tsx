import Link from "next/link";
import { Button } from "@heroui/button";
import appPath from "@/app/path";
import { ShoppingCart } from "lucide-react";
import ThemeToggler from "./mode-toggler";
import UserButton from "./user-button";
import DrawerMenu from "./drawer-menu";

const Menu = () => {
  return (
    <div className="flex flex-center justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ThemeToggler />
        <Button variant="ghost" className="">
          <Link href={appPath.cart()} className="flex gap-3 flex-center">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>

      <DrawerMenu />
    </div>
  );
};

export default Menu;
