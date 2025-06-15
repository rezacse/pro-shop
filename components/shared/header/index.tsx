import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@heroui/button";
import appPath from "@/app/path";
import { ShoppingCart, UserIcon } from "lucide-react";
import ThemeToggler from "./mode-toggler";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME}`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="flex-center flex gap-3">
          <ThemeToggler />
          <Button variant="ghost" className="">
            <Link href={appPath.cart()} className="flex gap-3 flex-center">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button variant="solid" color="primary">
            <Link href={appPath.signIn()} className="flex gap-3 flex-center">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
