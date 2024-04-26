const express = require("express");
const {
  allBooks,
  addBook,
  editBook,
  deleteBook,
  addHolder,
  deleteHolder,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/", allBooks);
router.post("/", addBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);
router.patch("/add-holder/:id", addHolder);
// router.patch("/delete-holder/:id", deleteHolder);

module.exports = router;
