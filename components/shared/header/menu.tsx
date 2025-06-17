"use client";

import Link from "next/link";
import { Button } from "@heroui/button";
import appPath from "@/app/path";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import ThemeToggler from "./mode-toggler";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@heroui/drawer";

import { useDisclosure } from "@heroui/react";
import { Divider } from "@heroui/divider";

const Menu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-center justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
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
      </nav>
      <nav className="md:hidden">
        <Button isIconOnly onPress={onOpen}>
          <EllipsisVertical />
        </Button>

        <Drawer
          //isDismissable={false}
          //isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <DrawerContent>
            {() => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                  Menu
                </DrawerHeader>
                <Divider />
                <DrawerBody className="flex flex-col gap-5 w-full items-center pt-5">
                  <ThemeToggler />
                  <Button variant="ghost" className="w-full ">
                    <Link
                      href={appPath.cart()}
                      className="flex gap-3 flex-center"
                    >
                      <ShoppingCart /> Cart
                    </Link>
                  </Button>
                  <Button variant="solid" color="primary" className="w-full">
                    <Link
                      href={appPath.signIn()}
                      className="flex gap-3 flex-center"
                    >
                      <UserIcon /> Sign In
                    </Link>
                  </Button>
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </nav>
    </div>
  );
};

export default Menu;
