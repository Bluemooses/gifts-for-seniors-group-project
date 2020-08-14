const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { query } = require("../modules/pool");
const router = express.Router();

/**
 * GET ALL WISHLIST ITEMS
 */
router.get("/", (req, res) => {
  queryText = `SELECT * FROM items ORDER BY priority DESC, item ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => res.sendStatus(500));
});

/**
 * POST NEW WISHLIST ITEM
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  let newItem = req.body.newItemDescription;
  let priority = req.body.newItemPriority;
  let queryText = `INSERT INTO items (item, priority)
VALUES ($1, $2);`;
  pool
    .query(queryText, [newItem, priority])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("SERVER POST ERR", error);
      res.sendStatus(500);
    });
});

/**
 * UPDATE WISHLIST ITEM
 */
router.put("/edit-item", rejectUnauthenticated, (req, res) => {
  let queryText = `UPDATE items SET "item"=$1 WHERE "id"=$2`;
  let itemId = req.body.itemToEdit;
  let item = req.body.itemDescription;

  pool
    .query(queryText, [item, itemId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});

/**
 * UPDATE PRIORITY OF WISHLIST ITEM
 */
router.put("/update/:id", rejectUnauthenticated, (req, res) => {
  let id = req.body.id;
  let priority = req.body.priority;
  console.log(req.body.priority);
  let changeHelper = !priority;
  let queryText = `UPDATE items SET priority = $2 WHERE id=$1`;
  pool
    .query(queryText, [id, changeHelper])
    .then((result) => {
      res.sendStatus(200);
      console.log("success", result);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});

/**
 * DELETE ITEM FROM WISHLIST
 */
router.delete('/delete/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('Delete request for id', reqId);
  let queryText = `DELETE FROM items WHERE id=$1`;
  pool.query(queryText, [reqId])
    .then((result) => {
      console.log('Item deleted');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
      res.sendStatus(500);
    })
})
module.exports = router;
