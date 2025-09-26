"use server";

import { Button } from "@heroui/button";

import { signOutUser } from "@/lib/actions/user-action";

const SignoutButton = () => {
  return (
    <form action={signOutUser} className="w-full">
      <Button className="w-full py-4 px-2 h-4 justify-start" variant="ghost">
        Sign Out
      </Button>
    </form>
  );
};

export default SignoutButton;
