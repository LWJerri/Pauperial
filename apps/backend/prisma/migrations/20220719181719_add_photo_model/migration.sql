-- CreateTable
CREATE TABLE "photo" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "deleteKey" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "photo_id_key" ON "photo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "photo_code_key" ON "photo"("code");

-- CreateIndex
CREATE UNIQUE INDEX "photo_deleteKey_key" ON "photo"("deleteKey");
