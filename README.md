# Gifts For Seniors Web App

## Description

Duration: 3 Week Sprint

This project was created to implement new features to an existing website for the Gifts For Seniors organization. Gifts For Seniors had the need to provide up to date information to potential donors on where they could make donations as well as what items were being requested. The application that has been developed provides an interface for an Admin user for the maintenance of this information and the changes are reflected in real time to visitors of the site. 

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_group_app` and create a `user`, `barrels`, and items table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE barrels (
    "hosts" character varying(250),
    "street" character varying(250),
    "city" character varying(250),
    "zipcode" character varying(250),
    "public" boolean DEFAULT true,
    "dates" character varying(250),
    "hours" character varying(250),
    "description" character varying(250),
    "id" integer DEFAULT nextval('public.barrels_id_seq'::regclass),
    "status" boolean DEFAULT true
);

CREATE TABLE public.items (
    "item" character varying(1000),
    "priority" boolean DEFAULT false,
    "id" integer DEFAULT nextval('public.items_id_seq'::regclass)
);

```

If you would like to name your database something else, you will need to change `prime_group_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`






