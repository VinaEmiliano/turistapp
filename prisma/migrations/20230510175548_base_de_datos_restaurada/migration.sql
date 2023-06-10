/*
  Warnings:

  - You are about to drop the `promuseos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `promuseos` DROP FOREIGN KEY `Promuseos_paisId_fkey`;

-- DropTable
DROP TABLE `promuseos`;

-- CreateTable
CREATE TABLE `Promuseo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `paisId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Promuseo` ADD CONSTRAINT `Promuseo_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Catpais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
