/*
  Warnings:

  - You are about to drop the column `url` on the `photo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "photo" DROP COLUMN "url";

-- CreateTable
CREATE TABLE "PhotoData" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "deleteKey" TEXT NOT NULL,
    "photoId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PhotoData_id_key" ON "PhotoData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PhotoData_code_key" ON "PhotoData"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PhotoData_deleteKey_key" ON "PhotoData"("deleteKey");

-- AddForeignKey
ALTER TABLE "PhotoData" ADD CONSTRAINT "PhotoData_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
