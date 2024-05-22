import axios from "axios";
import { ADD_BOOK } from "../constants";

const addBookSuccess = (book) => ({
  type: ADD_BOOK,
  book: book,
});

const serializeNewBook = (book) => ({
  title: book.title,
  genres: book.genres,
  author: book.author,
  createAt: book.createdAt
});

const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/', book).then((res) => serializeNewBook(res.data));
    // const newBook = serializeNewBook(response.data);
    await dispatch(addBookSuccess(response));
  } catch (error) {
    console.error("Erreur lors de l'ajout du livre:", error);
  }
};

export default addBook
