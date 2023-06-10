/*
  Warnings:

  - You are about to drop the column `catpaisId` on the `promuseos` table. All the data in the column will be lost.
  - Added the required column `paisId` to the `Promuseos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `promuseos` DROP FOREIGN KEY `Promuseos_catpaisId_fkey`;

-- AlterTable
ALTER TABLE `promuseos` DROP COLUMN `catpaisId`,
    ADD COLUMN `paisId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Promuseos` ADD CONSTRAINT `Promuseos_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Catpais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
