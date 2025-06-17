"use client";

import { APP_NAME } from "@/lib/constants";
import { Button } from "@heroui/button";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/img/logo.svg"
        alt={APP_NAME}
        width={48}
        height={48}
        priority={true}
      />

      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page!!</p>
        <Button
          className="mt-4 ml-2"
          onPress={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
