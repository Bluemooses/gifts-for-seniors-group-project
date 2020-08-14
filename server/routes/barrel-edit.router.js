const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { query } = require("../modules/pool");

const router = express.Router();



/**
 * EDIT BARREL
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
  // console.log(req.body);
  console.log(req.body.public);
  // console.log(req.body);
  let itemToEdit = req.body.itemToEdit;
  let hosts = req.body.hosts;
  let street = req.body.street;
  let city = req.body.city;
  let description = req.body.description;
  let zipcode = req.body.zipcode;
  let dates = req.body.date;
  let hours = req.body.hours;
  // let public = req.body.public;
  const queryText = `UPDATE barrels SET (hosts, street, city, description, zipcode, hours, dates) = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8`;
  pool
    .query(queryText, [
      hosts,
      street,
      city,
      description,
      zipcode,
      hours,
      dates,
      itemToEdit,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER UPDATE", error);
    });
});



/**
 * DELETE BARREL LOCATION
 */
router.delete("/delete/:id", (req, res) => {
  let reqId = req.params.id;
  console.log("Delete request for id", reqId);
  let queryText = `DELETE FROM barrels WHERE id=$1`;
  pool
    .query(queryText, [reqId])
    .then((result) => {
      console.log("Item deleted");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
