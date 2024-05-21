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
});

const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/', book);
    const newBook = serializeNewBook(response.data);
    dispatch(addBookSuccess(newBook));
  } catch (error) {
    console.error("Erreur lors de l'ajout du livre:", error);
  }
};

export default addBook
