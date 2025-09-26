import { Card, CardBody, CardHeader } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import SignInForm from "./sign-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const session = await auth();

  const { callbackUrl } = await props.searchParams;
  if (session) return redirect(callbackUrl || "/");

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-4">
        <CardHeader className="flex-col">
          <Link href="/" className="flex-center">
            <Image
              src="/img/logo.svg"
              width={100}
              height={100}
              alt={APP_NAME}
              priority={true}
            />
          </Link>

          <p className="text-md pt-2">Sign In</p>
          <p className="text-small text-default-500">Sign in to your account</p>
        </CardHeader>

        <CardBody>
          <SignInForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default SignInPage;
