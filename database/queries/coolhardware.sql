CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  Fname VARCHAR(255) NOT NULL,
  Lname VARCHAR(255) NOT NULL,
  nickname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    `desc` TEXT,
    stock VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
CREATE TABLE product_category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    `desc` TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (id)
);
CREATE TABLE product_brand (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (id)
);
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT,
  status VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TABLE cart_item (
  id INT NOT NULL AUTO_INCREMENT,
  carts_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (carts_id) REFERENCES carts(id)
);
CREATE TABLE cart_item_products(
  id INT NOT NULL AUTO_INCREMENT,
  cart_item_id INT NOT NULL,
  products_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (carts_id) REFERENCES carts(id)
);