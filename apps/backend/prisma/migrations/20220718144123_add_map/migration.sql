/*
  Warnings:

  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Link";

-- CreateTable
CREATE TABLE "link" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "secret" TEXT,
    "deleteKey" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "link_id_key" ON "link"("id");

-- CreateIndex
CREATE UNIQUE INDEX "link_code_key" ON "link"("code");

-- CreateIndex
CREATE UNIQUE INDEX "link_deleteKey_key" ON "link"("deleteKey");
