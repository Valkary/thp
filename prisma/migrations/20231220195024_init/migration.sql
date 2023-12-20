/*
  Warnings:

  - The primary key for the `catESTACIONES` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `catESTACIONES` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "catESTACIONES" DROP CONSTRAINT "catESTACIONES_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "idEstacion" DROP DEFAULT,
ADD CONSTRAINT "catESTACIONES_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "catESTACIONES_idEstacion_seq";
