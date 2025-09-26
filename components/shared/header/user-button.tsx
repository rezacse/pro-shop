"use server";

import { Button } from "@heroui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";

import { auth } from "@/auth";
import appPath from "@/app/path";
import UserButtonMenu from "./user-button-menu";

const UserButton = async () => {
  const session = await auth();
  if (!session) {
    return (
      <Button variant="solid" color="primary">
        <Link href={appPath.signIn()} className="flex gap-3 flex-center">
          <UserIcon /> Sign In
        </Link>
      </Button>
    );
  }

  return <UserButtonMenu user={session.user} />;
};

/* 
   <DropdownItem key="up">
            <Link href="/user/profile" className="w-full">
              User Profile
            </Link>
          </DropdownItem>

          <DropdownItem key="orders">
            <Link href="/user/orders" className="w-full">
              Order History
            </Link>
          </DropdownItem>
          {session?.user?.role === 'admin' && (
            <DropdownItem>
              <Link href='/admin/overview' className='w-full'>
                Admin
              </Link>
            </DropdownItem>
          )} */
export default UserButton;
