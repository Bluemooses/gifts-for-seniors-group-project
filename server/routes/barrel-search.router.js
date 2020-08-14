const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { query } = require("../modules/pool");

const router = express.Router();

/**
 * SEARCH BARRELS
 */
router.get("/:search", (req, res) => {
  let searchQuery = req.params.search;
  if (searchQuery === "*all" || "") {
    console.log("hello");
    let queryText = `SELECT * FROM barrels ORDER BY city ASC`;
    pool
      .query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("ERROR IN SERVER SEARCH GET", error);
      });
  } else {
    console.log(searchQuery);

    const queryText = `SELECT * FROM barrels WHERE city ILIKE '%${searchQuery}%' OR hosts ILIKE '%${searchQuery}%' OR hours ILIKE '%${searchQuery}%' OR description ILIKE '%${searchQuery}%' OR zipcode LIKE '%${searchQuery}%' OR dates ILIKE '%${searchQuery}%;'`;
    pool
      .query(queryText)
      .then((result) => {
        // console.log(result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("ERROR IN SERVER SEARCH GET", error);
      });
  }
});

module.exports = router;
