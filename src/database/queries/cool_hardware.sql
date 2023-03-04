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

INSERT INTO user (`first_name`, `last_name`, `nickname`, `email`, `password`, `image`, `admin`, `is_active`) VALUES ('admin', 'admin', 'admin', 'admin@admin.com', '$2b$10$hQofXYeXx1ZWzeUVvUevXO/N5rHUaXxLmWhXHFH4/j/6TV3s6SBnm', 'Admin.jpg', 1, 1);

INSERT INTO category (`id`, `name`) VALUES (1, 'Notebook');
INSERT INTO category (`id`, `name`) VALUES (2, 'Monitor');
INSERT INTO category (`id`, `name`) VALUES (3, 'Auricular');
INSERT INTO category (`id`, `name`) VALUES (4, 'Procesador');
INSERT INTO category (`id`, `name`) VALUES (5, 'CPU Cooler');
INSERT INTO category (`id`, `name`) VALUES (6, 'Gabinete');
INSERT INTO category (`id`, `name`) VALUES (7, 'Memoria RAM');
INSERT INTO category (`id`, `name`) VALUES (8, 'Motherboard');
INSERT INTO category (`id`, `name`) VALUES (9, 'Placa de video');
INSERT INTO category (`id`, `name`) VALUES (10, 'Silla Gamer');
INSERT INTO category (`id`, `name`) VALUES (11, 'SSD');
INSERT INTO category (`id`, `name`) VALUES (12, 'Mouse');
INSERT INTO category (`id`, `name`) VALUES (13, 'Teclado');

INSERT INTO brand (`id`, `name`) VALUES (1, 'Asus');
INSERT INTO brand (`id`, `name`) VALUES (2, 'Gigabyte');
INSERT INTO brand (`id`, `name`) VALUES (3, 'Corsair');
INSERT INTO brand (`id`, `name`) VALUES (4, 'AMD');
INSERT INTO brand (`id`, `name`) VALUES (5, 'ID-Cooling');
INSERT INTO brand (`id`, `name`) VALUES (6, 'Kingston');
INSERT INTO brand (`id`, `name`) VALUES (7, 'Logitech');

INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('TUF Gaming FX506L', 'Procesador: Intel Core i5. Almacenamiento: SSD 512GB. Conectividad: Wi-Fi. Graficos: Nvidia GTX 1650 4GB. Memoria Ram: 8 GB. Pantalla: 15.6. Sistema Operativo: Windows 10. Uso Recomendado: Gaming.', 10, 380000, 50, 'notebook.jpg', 1, 1, 1);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('Aorus FI25F 25"', 'Pantalla: 25" FullHD. Tipo: Plano. Parlantes: No. Panel: IPS. Conectividad: 1xDisplay Port, 2xHDMI. Frecuencia: 240 Hz. Consumo: 60 W. Tiempo de Repuesta(ms): 0.4ms. Uso: Edición y Gaming.', 15, 365000, 30, 'monitor.jpg', 1, 2, 2);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('HS35 Stereo', 'Micrófono: Si. Es inalambrico: No. Conector: Jack 3.5 mm. Unidad de Diafragma: 50mm. Longitud del Cable: 1,1 mts. Compatible con: Play Station, Xbox y PC.', 4, 16600, 0, 'auricular.jpg', 1, 3, 3);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('Ryzen 7 5800X', 'Socket: AM4. Cantidad de nucleos: 8. Hilos: 16. GPU Integrado: No. Cache: 32MB. Soporta Memorias RAM: DDR4. Consumo: 105 W.', 6, 155000, 30, 'microprocesador.jpg', 1, 4, 4);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('SE-903-SD', 'Socket: Intel LGA 1200 y AMD AM4. Consumo: 130W. Peso: 370g. Velocidad del ventilador: 2000 RPM.', 5, 9500, 0, 'cooler.jpg', 1, 5, 5);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('4000D AIRFLOW', 'Dimensiones: 45,3cm x 23,0cm x 46,6cm. Factor de forma: Mid-Tower. Vidrio templado: Si. Material: Acero y PVC. Peso: 7,85kg.', 4, 35000, 30, 'gabinete.jpg', 1, 6, 3);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('Aorus GP-ARS16G37', 'Modulos de memoria: 2x 8GB. Capacidad total: 16GB. RGB: Si. Tecnologia: DDR4. Frecuencia: 3600 MHz.', 8, 60000, 0, 'memoria_ram.jpg', 1, 7, 2);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('Aorus B550 Elite PRO AX', 'Socket: AM4. Chipset: AMD B550. Memoria: 4 socket para Memoria Ram DDR4. Diseño: ATX. Conectores: USB 3.2, HDMI. RGB: Si.', 9, 150000, 20, 'mother.jpg', 1, 8, 2);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('Rog Strix Geforce RTX 3090', 'Interfaz: PCI-Express 4.0. Cantidad de núcleos: 10496. Resolucion máxima: 7680x4320. Memoria: 24GB. Tipo de memoria: GDDR6X. Bus de memoria: 384 bit. RGB: Si.', 2, 575000, 5, 'placa-de-video.jpeg', 1, 9, 1);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('T3 RUSH', 'Peso soportado: 120kg. Tipo de asiento: Acolchonado. Inclinacion: Hasta los 180°. Apoyabrazos: Si. Número de ruedas: 5. Engonomico: Si. Peso: 22kg.', 1, 250000, 0, 'silla-gamer-corsair.jpg', 1, 10, 3);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('A400 1TB', 'Capacidad: 1TB. Interfaces: SATA III. Peso: 40g. Tecnologia: 3D NAND.', 50, 25000, 30, 'ssd.jpg', 1, 11, 6);
INSERT INTO product (`name`, `description`, `stock`, `price`, `discount`, `image`, `is_active`, `category_id`, `brand_id`) VALUES ('G903', 'Inalámbrico: Si. Sensor: Hero. Cantidad de botones: 11. DPI maximo: 16000. Frecuencia de repuesta: 1000HZ. Peso: 110gr. Tecnologia Wifi: LIGHTSPEED. Recargable: Si.', 30, 28000, 0, 'mouse_logitech.jpg', 1, 12, 7);