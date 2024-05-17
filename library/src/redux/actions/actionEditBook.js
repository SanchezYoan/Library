import axios from "axios";
import { EDIT_BOOK } from "../constants";

const editBookSuccess = (idBook, book) => {
    return {
        type: EDIT_BOOK,
        idBook: idBook,
        book: book
    };
};

const editBook = (idBook, book) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:5000/${idBook}`, book);
        dispatch(editBookSuccess(response.data));
    } catch (error) {
        console.error("Erreur lors de l'édition du livre", error);
    }
}

export default editBook;
