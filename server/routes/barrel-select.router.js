const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { query } = require("../modules/pool");

const router = express.Router();

/**
 * GET SMALL LIST OF BARRELS
 */
router.get("/", (req, res) => {
  queryText = `SELECT * FROM barrels ORDER BY city ASC LIMIT 7`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => res.sendStatus(500));
});

/**
 * GET ALL BARRELS
 */
router.get("/admin", (req, res) => {
  queryText = `SELECT * FROM barrels ORDER BY city ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => res.sendStatus(500));
});

module.exports = router;
