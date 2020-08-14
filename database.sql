
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE barrels
(
    hosts VARCHAR (250),
    street VARCHAR (250),
    city VARCHAR (250),
    zipcode INTEGER
)
CREATE TABLE items
(
    item VARCHAR(1000),
    highpriority BOOLEAN DEFAULT FALSE
)

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);