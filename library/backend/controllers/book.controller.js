const bookModel = require("../models/book.model");

const allBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    // console.log("ALL BOOKS");
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ message: err })
  }

};

const addBook = async (req, res) => {
  try {
    const books = await bookModel.find();

    const isTitleExist = books.some((book) => book.title === req.body.title);

    if (isTitleExist) {
      return res.status(406).json({ error: "Ce livre est déjà enregistré" });
    }

    const newBook = await bookModel.create({
      title: req.body.title,
      genres: req.body.genres,
      author: req.body.author
    });
    res.status(200).json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editBook = async (req, res) => {
  const book = await bookModel.findById(req.params.id);
  res.status(200);

  if (!book) {
    res.status(400).json({ message: "Ce livre n'existe pas" });
  }

  const updateBook = await bookModel.findByIdAndUpdate(book, req.body, {
    new: true,
  });
  res.status(200).json(updateBook);
};

const deleteBook = async (req, res) => {
  const book = await bookModel.findById(req.params.id);

  if (!book) {
    res.status(400).json({ message: "Ce livre n'existe pas" });
  }

  await book.deleteOne();
  res.status(200).json("Livre supprimé !" + book);
};

const addHolder = async (req, res) => {
  try {
    await bookModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { holder: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};
const deleteHolder = async (req, res) => {
  try {
    await bookModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { holder: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  allBooks,
  addBook,
  editBook,
  deleteBook,
  addHolder,
  deleteHolder,
};
