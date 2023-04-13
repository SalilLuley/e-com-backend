CREATE TABLE `parko`.`product` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `desc` TEXT NULL,
    `SKU` VARCHAR(255) NULL,
    `category_id` INT NULL,
    `inventory_id` INT NULL,
    `price` DECIMAL NULL,
    `discount_id` INT NULL,
    `created_at` DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL,
    `deleted_at` TIMESTAMP NULL,
    PRIMARY KEY (`id`));


CREATE TABLE `parko`.`product_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `desc` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `parko`.`product_inventory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`));
