const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { query } = require("../modules/pool");

const router = express.Router();

/**
 * UPDATE BARREL STATUS ACTIVE/DEACTIVATED
 */
router.put("/update/:id", rejectUnauthenticated, (req, res) => {
  let status = req.body.status;
  let id = req.body.id;
  let statusUpdater = !status;
  const queryText = `UPDATE barrels set status = $2 WHERE id = $1;`;
  pool
    .query(queryText, [id, statusUpdater])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});

/**
 * UPDATE BARREL STATUS PUBLIC/PRIVATFE
 */
router.put("/barrel-status/:id", rejectUnauthenticated, (req, res) => {
  let public = req.body.public;
  let id = req.body.id;
  let statusUpdater = !public;
  // console.log(!public);
  const queryText = `UPDATE barrels set public = $2 WHERE id = $1;`;
  pool
    .query(queryText, [id, statusUpdater])
    .then((result) => {
      // console.log(result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});

module.exports = router;
