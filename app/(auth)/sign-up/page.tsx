import { Card, CardBody, CardHeader } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUpForm from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

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

          <p className="text-md pt-2">Create Account</p>
          <p className="text-small text-default-500">
            Enter your information below to sign up
          </p>
        </CardHeader>

        <CardBody>
          <SignUpForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUpPage;
