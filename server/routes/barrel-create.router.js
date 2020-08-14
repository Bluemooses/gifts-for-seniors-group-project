const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { query } = require("../modules/pool");

const router = express.Router();

/**
 * POST NEW BARREL LOCATION
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  let hosts = req.body.host;
  let street = req.body.street;
  let city = req.body.city;
  let zipcode = req.body.zipcode;
  let description = req.body.description;
  let hours = req.body.hours;
  let dates = req.body.dates;
  let public = req.body.public;
  let queryText = `INSERT INTO barrels (hosts, street, city, zipcode, description, hours, dates, public) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;

  pool
    .query(queryText, [
      hosts,
      street,
      city,
      zipcode,
      description,
      hours,
      dates,
      public,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("SERVER POST ERR", error);
      res.sendStatus(500);
    });
});

module.exports = router;
