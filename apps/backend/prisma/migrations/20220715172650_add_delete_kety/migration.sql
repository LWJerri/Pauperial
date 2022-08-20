/*
  Warnings:

  - Added the required column `deleteKey` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "deleteKey" TEXT NOT NULL;
