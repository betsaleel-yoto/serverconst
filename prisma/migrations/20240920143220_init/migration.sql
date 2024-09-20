/*
  Warnings:

  - You are about to drop the `InfoMail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Realisation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `commandes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "InfoMail";

-- DropTable
DROP TABLE "Realisation";

-- DropTable
DROP TABLE "commandes";

-- CreateTable
CREATE TABLE "blogs" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "immo" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "immo_pkey" PRIMARY KEY ("id")
);
