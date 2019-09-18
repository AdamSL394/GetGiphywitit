CREATE DATABASE eventsDB;
USE eventsDB;

CREATE TABLE `events` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `heading` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);