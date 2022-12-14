DROP DATABASE IF EXISTS auction;
CREATE DATABASE auction;
USE auction;
CREATE TABLE guide (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255),
content TEXT
);

CREATE TABLE img_url (
id INT PRIMARY KEY AUTO_INCREMENT,
url VARCHAR(255),
product_id int,
foreign key (product_id) references product (id),
auction_id int,
foreign key (auction_id) references auction (id)
);

create table user (
id int primary key auto_increment,
name varchar(45)
);
create table category (
id int primary key auto_increment,
name varchar(45)
);
create table auction_status (
id int primary key auto_increment,
name varchar(45)
);
create table review_status (
id int primary key auto_increment,
name varchar(45)
);
create table price_step (
id int primary key auto_increment,
step double
);
create table product (
id int primary key auto_increment,
name varchar(255),
initial_price double,
start_time datetime,
end_time datetime,
description text,
price_step_id int,
review_status_id int,
auction_status_id int,
user_id int,
category_id int,
foreign key (price_step_id) references price_step (id),
foreign key (review_status_id) references review_status (id),
foreign key (auction_status_id) references auction_status (id),
foreign key (user_id) references user (id),
foreign key (category_id) references category (id)
);