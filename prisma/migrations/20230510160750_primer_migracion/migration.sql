-- CreateTable
CREATE TABLE `Promuseos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `catpaisId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Catpais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `icono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Promuseos` ADD CONSTRAINT `Promuseos_catpaisId_fkey` FOREIGN KEY (`catpaisId`) REFERENCES `Catpais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
