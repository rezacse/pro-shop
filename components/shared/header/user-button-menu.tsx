"use client";

import { Button } from "@heroui/button";
// import { UserIcon } from "lucide-react";
// import Link from "next/link";

import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@heroui/dropdown";
import { signOutUser } from "@/lib/actions/user-action";

type IProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
};
const UserButtonMenu = ({ user }: IProps) => {
  const firstInitial = user?.name?.charAt(0).toUpperCase() ?? "U";

  return (
    <div className="flex gap-2 items-center">
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="ghost"
            className="relative px-3.5 min-w-0 h-10 rounded-full ml-2 flex items-center justify-center bg-gray-200"
          >
            {firstInitial}
          </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label="Static Actions" className="w-56">
          <DropdownItem key="name" className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {user?.name}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {user?.email}
              </div>
            </div>
          </DropdownItem>

          <DropdownItem key="s-out" className="p-0 mb-1">
            <form action={signOutUser} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant="ghost"
              >
                Sign Out
              </Button>
            </form>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
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
export default UserButtonMenu;
