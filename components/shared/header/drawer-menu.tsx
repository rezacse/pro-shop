"use client";

import Link from "next/link";
import { Button } from "@heroui/button";
import appPath from "@/app/path";
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import ThemeToggler from "./mode-toggler";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@heroui/drawer";

import { useDisclosure } from "@heroui/react";
import { Divider } from "@heroui/divider";
import UserButton from "./user-button";

const DrawerMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
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
              <DrawerHeader className="flex flex-col gap-1">Menu</DrawerHeader>
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
                <UserButton />
                {/*        

                  <Button variant="solid" color="primary" className="w-full">
                    <Link
                      href={appPath.signIn()}
                      className="flex gap-3 flex-center"
                    >
                      <UserIcon /> Sign In
                    </Link>
                  </Button> */}
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default DrawerMenu;
