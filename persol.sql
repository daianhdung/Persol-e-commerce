create database persol;
use persol;

CREATE TABLE `role` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(100)
);

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `fullname` varchar(100),
  `phone` varchar(100),
  `address` varchar(100),
  `date` datetime DEFAULT (now()),
  `role_id` INT
);

CREATE TABLE `category` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL
  
);

CREATE TABLE `brand` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL
);

create table category_brand (
	category_id int,
	brand_id int,
    primary key(category_id, brand_id),
    foreign key(category_id) references category(id),
    foreign key(brand_id) references brand(id)
);

CREATE TABLE `product` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `main_image` varchar(100),
  `amount_of_sold` int DEFAULT 0,
  `price` int,
  `category_id` int,
  `brand_id` int
);



CREATE TABLE `image_product` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `product_id` int
);

CREATE TABLE `bookmark_product` (
  `user_id` int,
  `product_id` int,
  PRIMARY KEY (`user_id`, `product_id`)
);

CREATE TABLE `coupon` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50) UNIQUE NOT NULL,
  `rate` float NOT NULL
);

CREATE TABLE `status` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50)
);

CREATE TABLE `order` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `fee_ship` int,
  `coupon` float,
  `temp_total` int,
  `total` float,
  `user_id` int,
  `delivery_address` varchar(255),
  `status_id` int
);

CREATE TABLE `product_order` (
  `order_id` int,
  `product_id` int,
  `amount` int,
  `price` int,
  PRIMARY KEY (`order_id`, `product_id`)
);

ALTER TABLE `user` ADD FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);

ALTER TABLE `image_product` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `bookmark_product` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `bookmark_product` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `product_order` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `product_order` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);


INSERT INTO role(id, name, description ) VALUES (1, "ROLE_ADMIN", "Admin");
INSERT INTO role(id, name, description ) VALUES (2, "ROLE_USER", "Customer");

INSERT INTO `user` (`id`, `email`, `password`, `fullname`, `phone`, `address`, `date`, `role_id`) VALUES (NULL, 'admin@gmail.com', '$2a$10$kAvJY6I3l.VEa9vCEeFV6un18QzgX9pW3B3AfsIhUFdukqXOe5uiK', 'ADMIN', 091234567, 'test', '2023-02-11 14:23:26', '1');
INSERT INTO `user` (`id`, `email`, `password`, `fullname`, `phone`, `address`, `date`, `role_id`) VALUES (NULL, 'user@gmail.com', '$2a$10$/QPViOFoUAEV3HKPJ3hbOOYyj0i7W0xZcAxPluujW88YTPMQdpEgi', 'Đại Dũng', NULL, NULL, '2023-02-11 14:23:26', '2');


/*brand*/
INSERT INTO `brand` (`id`, `name`) VALUES (NULL, 'Chema');
INSERT INTO `brand` (`id`, `name`) VALUES (NULL, 'Gucci');
INSERT INTO `brand` (`id`, `name` ) VALUES (NULL, 'Rayban');
INSERT INTO `brand` (`id`, `name`) VALUES (NULL, 'Prada');
INSERT INTO `brand` (`id`, `name`) VALUES (NULL, 'Hoya');
INSERT INTO `brand` (`id`, `name` ) VALUES (NULL, 'Element');
INSERT INTO `brand` (`id`, `name` ) VALUES (NULL, 'Gentle Monster');
INSERT INTO `brand` (`id`, `name`) VALUES (NULL, 'Coach');
INSERT INTO `brand` (`id`, `name`) VALUES (NULL, 'Micheals Kors');




/*category*/

INSERT INTO category(name) VALUES ("Kính mát");
INSERT INTO category(name)  VALUES ("Gọng kính");
INSERT INTO category(name) VALUES ("Tròng kính");


insert into category_brand(category_id,brand_id) values (1,1);
insert into category_brand(category_id,brand_id) values (1,2);
insert into category_brand(category_id,brand_id) values (2,2);

/* sua lai category id  */


/*Product*/
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (1, 'Mat kinh', NULL, 1, 200, 1, 1);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (2, 'Gong kinh', NULL, 12, 202, 2, 2);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (3, 'Trong kinh kinh', NULL, 14, 20, 1, 3);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (4, 'Mat kinh', NULL, 5, 202, 1, 4);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (5, 'Mat kinh', NULL, 6, 100, 2, 5);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (6, 'Trong kinh', NULL, 9, 197, 3, 6);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (7, 'Gong kinh', NULL, 7, 189, 1, 7);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (8, 'Mat kinh', NULL, 30, 209, 2, 8);
INSERT INTO `product` (`id`, `name`, `main_image`, `amount_of_sold`, `price`, `category_id`, `brand_id`) VALUES (9, 'Gong kinh', NULL, 19, 188, 3, 9);










