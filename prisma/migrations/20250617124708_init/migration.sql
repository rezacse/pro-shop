-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'SUPPORT', 'ADMIN');

-- CreateTable
CREATE TABLE "Currency" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Name" VARCHAR(50) NOT NULL,
    "Symbol" VARCHAR(3) NOT NULL,
    "Code" VARCHAR(10) NOT NULL,
    "conversionRate" DECIMAL(6,2) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Country" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Name" VARCHAR(50) NOT NULL,
    "IsoCode" VARCHAR(20) NOT NULL DEFAULT '',
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "User" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Name" VARCHAR(250) NOT NULL,
    "Username" VARCHAR(15) NOT NULL,
    "Password" VARCHAR(100) NOT NULL,
    "Email" VARCHAR(50) NOT NULL,
    "MobileNo" VARCHAR(15) NOT NULL,
    "CountryID" UUID NOT NULL,
    "CurrencyID" UUID NOT NULL,
    "Role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "TwoFactorAuth" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "SecretKey" VARCHAR(50) NOT NULL,
    "IpAddress" VARCHAR(50) NOT NULL,
    "IsActive" BOOLEAN NOT NULL,
    "DeactivatedOn" TIMESTAMP(3),
    "UserID" UUID NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TwoFactorAuth_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Name" VARCHAR(250) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ProductBrand" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Name" VARCHAR(250) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductBrand_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Product" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Name" VARCHAR(250) NOT NULL,
    "Slug" VARCHAR(100) NOT NULL,
    "Description" VARCHAR(5000) NOT NULL,
    "ImgUrls" TEXT[],
    "Detail" VARCHAR(5000) NOT NULL DEFAULT '[]',
    "NoOfStock" INTEGER NOT NULL,
    "Price" DECIMAL(10,2) NOT NULL,
    "DiscountAmount" DECIMAL(10,2) NOT NULL,
    "DiscountIsPercentage" DECIMAL(4,2) NOT NULL,
    "IsFeatured" BOOLEAN NOT NULL DEFAULT false,
    "BannerImg" VARCHAR(100) NOT NULL DEFAULT '',
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ProductCategoryID" UUID NOT NULL,
    "ProductBrandID" UUID NOT NULL,
    "CountryID" UUID NOT NULL,
    "CurrencyID" UUID NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ProductReview" (
    "ID" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Rating" DECIMAL(3,2) NOT NULL,
    "Review" VARCHAR(50) NOT NULL,
    "Note" VARCHAR(50) NOT NULL,
    "IsVerified" BOOLEAN NOT NULL DEFAULT false,
    "UserID" UUID NOT NULL,
    "ProductID" UUID NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_MobileNo_key" ON "User"("MobileNo");

-- CreateIndex
CREATE UNIQUE INDEX "TwoFactorAuth_SecretKey_key" ON "TwoFactorAuth"("SecretKey");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_CountryID_fkey" FOREIGN KEY ("CountryID") REFERENCES "Country"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_CurrencyID_fkey" FOREIGN KEY ("CurrencyID") REFERENCES "Currency"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwoFactorAuth" ADD CONSTRAINT "TwoFactorAuth_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ProductCategoryID_fkey" FOREIGN KEY ("ProductCategoryID") REFERENCES "ProductCategory"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ProductBrandID_fkey" FOREIGN KEY ("ProductBrandID") REFERENCES "ProductBrand"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_CountryID_fkey" FOREIGN KEY ("CountryID") REFERENCES "Country"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_CurrencyID_fkey" FOREIGN KEY ("CurrencyID") REFERENCES "Currency"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_ProductID_fkey" FOREIGN KEY ("ProductID") REFERENCES "Product"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
