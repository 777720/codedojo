DROP TABLE IF EXISTS MOVIE;
DROP TABLE IF EXISTS USER;

--CREATE TABLE MOVIE (id int auto_increment, name varchar(200) not null, image varchar(200) not null);
--3-1
CREATE TABLE MOVIE (id int auto_increment, name varchar(200) not null, image varchar(200) not null, director varchar(200) not null, runtime varchar(200) not null);
CREATE TABLE USER (email varchar(200) not null, password varchar(200) not null,);
