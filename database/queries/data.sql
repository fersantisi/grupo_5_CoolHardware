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