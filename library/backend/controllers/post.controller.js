const postModel = require("../models/post.model");

const allBooks = async (req, res) => {
  try {
    const posts = await postModel.find();
    console.log("ALL BOOKS");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: err })
  }

};

const addBook = async (req, res) => {

  const newPost = await postModel.create({
    title: req.body.title,
    author: req.body.author,
  });
  try {
    const post = await newPost.save()
    console.log("Livre ajouté");
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editBook = async (req, res) => {
  const post = await postModel.findById(req.params.id);
  res.status(200);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updatePost = await postModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updatePost);
};

const deleteBook = async (req, res) => {
  const post = await postModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await post.deleteOne();
  res.status(200).json("Message supprimé !" + post);
};

const addHolder = async (req, res) => {
  try {
    await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};
const deleteHolder = async (req, res) => {
  try {
    await postModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
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
