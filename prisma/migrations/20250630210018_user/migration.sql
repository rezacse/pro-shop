-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ImgUrl" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "VerifiedOn" TIMESTAMP(3),
ALTER COLUMN "Name" SET DEFAULT '';

-- CreateTable
CREATE TABLE "Account" (
    "userId" UUID NOT NULL,
    "Type" TEXT NOT NULL,
    "Provider" TEXT NOT NULL,
    "providerAccountID" TEXT NOT NULL,
    "RefreshToken" TEXT NOT NULL DEFAULT '',
    "AccessToken" TEXT NOT NULL DEFAULT '',
    "ExpiresAt" INTEGER NOT NULL,
    "TokenType" TEXT NOT NULL DEFAULT '',
    "Scope" TEXT NOT NULL DEFAULT '',
    "IdToken" TEXT NOT NULL DEFAULT '',
    "SessionState" TEXT NOT NULL DEFAULT '',
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("Provider","providerAccountID")
);

-- CreateTable
CREATE TABLE "Session" (
    "Identifier" TEXT NOT NULL,
    "UserID" UUID NOT NULL,
    "ExpiresAt" TIMESTAMP(3) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("Identifier")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "Identifier" TEXT NOT NULL,
    "Token" TEXT NOT NULL,
    "ExpiresAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("Identifier","Token")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE CASCADE ON UPDATE CASCADE;
