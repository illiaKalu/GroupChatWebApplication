CREATE DATABASE USERMESSAGESSTORE;

USE USERMESSAGESSTORE;

CREATE TABLE USERMESSAGES (
  ID INT NOT NULL AUTO_INCREMENT,
  USERNAME VARCHAR(255) NOT NULL,
  MESSAGE VARCHAR(255) NOT NULL,
  SENT_TIME TIMESTAMP NOT NULL,
  PRIMARY KEY (ID));

<!-- check that database created correctly
-- SHOW TABLES;
-- DESCRIBE USERMESSAGES;

-- Do NOT forget to fill username and password with your actual data in /resources/persistance-mysql.properties -->


