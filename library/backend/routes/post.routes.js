const express = require("express");
const {
  allBooks,
  addBook,
  editPost,
  deletePost,
  addHolder,
  deleteHolder,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/", allBooks);
router.post("/", addBook);
// router.put("/:id", editPost);
// router.delete("/:id", deletePost);
// router.patch("/add-holder/:id", addHolder);
// router.patch("/delete-holder/:id", deleteHolder);

module.exports = router;
