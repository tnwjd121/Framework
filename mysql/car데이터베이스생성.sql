create database car
default character set utf8 
collate utf8_general_ci;

use car;
select * from car; 


INSERT INTO car (brand, model, color, register_number, year, price)
VALUES ('Shelby', 'Cobra', 'White', 'SC-5467', 1953, 65000);
