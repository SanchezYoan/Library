import axios from "axios";
import { ADD_BOOK } from "../constants";

const addBookSuccess = (book) => ({
  type: ADD_BOOK,
  book: book,
});


const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/', book);
    dispatch(addBookSuccess(response.data));

  } catch (error) {
    console.error("Erreur lors de l'ajout du livre:", error);
  }
};

export default addBook
