DROP DATABASE IF EXISTS `cool_hardware`;

CREATE SCHEMA IF NOT EXISTS `cool_hardware` DEFAULT CHARACTER SET utf8 COLLATE=utf8_general_ci;
USE `cool_hardware` ;


CREATE TABLE IF NOT EXISTS `cool_hardware`.`Brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8 COLLATE=utf8_general_ci;


CREATE TABLE IF NOT EXISTS `cool_hardware`.`Category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `desc` TEXT NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8 COLLATE=utf8_general_ci;


CREATE TABLE IF NOT EXISTS `cool_hardware`.`Product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `stock` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `discount` INT NULL DEFAULT NULL,
  `image` VARCHAR(255),
  `is_active` TINYINT(1) NULL,
  `category_id` INT NOT NULL,
  `brand_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`, `brand_id`),
  INDEX `fk_Product_Category1_idx` (`category_id` ASC),
  INDEX `fk_Product_Brand1_idx` (`brand_id` ASC),
  CONSTRAINT `fk_Product_Category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `cool_hardware`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_Brand1`
    FOREIGN KEY (`brand_id`)
    REFERENCES `cool_hardware`.`Brand` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8 COLLATE=utf8_general_ci;


CREATE TABLE IF NOT EXISTS `cool_hardware`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` VARCHAR(255),
  `admin` TINYINT(1) NOT NULL DEFAULT '0',
  `is_active` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8 COLLATE=utf8_general_ci;

INSERT INTO category (`name`)
VALUES ('Notebook');
INSERT INTO category (`name`)
VALUES ('Monitor');
INSERT INTO category (`name`)
VALUES ('Auricular');
INSERT INTO brand (`name`)
VALUES ('Asus');
INSERT INTO brand (`name`)
VALUES ('Gigabyte');
INSERT INTO brand (`name`)
VALUES ('Corsair');
INSERT INTO user (
    `first_name`,
    `last_name`,
    `nickname`,
    `email`,
    `password`,
    `image`,
    `admin`,
    `is_active`
  )
VALUES (
    'admin',
    'admin',
    'admin',
    'admin@admin.com',
    '$2b$10$lMGjoQKbZ9zQM5P7I9NqZepgWS6b4HTDQkiMuu2S.Cpop.rq/rFEC',
    'Admin.jpg',
    1,
    1
  );
  
  INSERT INTO product (
    `name`,
    `description`,
    `stock`,
    `price`,
    `discount`,
    `image`,
    `is_active`,
    `category_id`,
    `brand_id`
  )
VALUES (
    'TUF Gaming FX506L',
    'Procesador: Intel Core i5',
    10,
    380000,
    50,
    'notebook.jpg',
    1,
    1,
    1
  );
INSERT INTO product (
    `name`,
    `description`,
    `stock`,
    `price`,
    `discount`,
    `image`,
    `is_active`,
    `category_id`,
    `brand_id`
  )
VALUES (
    'Aorus FI25F 25"',
    '"Pantalla: 25"',
    15,
    320000,
    30,
    'monitor.jpg',
    1,
    2,
    2
  );
INSERT INTO product (
    `name`,
    `description`,
    `stock`,
    `price`,
    `discount`,
    `image`,
    `is_active`,
    `category_id`,
    `brand_id`
  )
VALUES (
    'HS35 Stereo',
    'Micrófono: Si',
    4,
    320000,
    0,
    'auricular.jpg',
    1,
    3,
    3
  );