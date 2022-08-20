/*
  Warnings:

  - You are about to drop the `PhotoData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PhotoData" DROP CONSTRAINT "PhotoData_photoId_fkey";

-- DropTable
DROP TABLE "PhotoData";

-- DropTable
DROP TABLE "photo";
