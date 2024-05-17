import axios from "axios";
import { DELETE_BOOK } from "../constants";

const deleteBookSuccess = (idBook) => {
    return {
        type: DELETE_BOOK,
        idBook: idBook,
    };
};

const deleteBook = (idBook) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5000/${idBook}`);
        dispatch(deleteBookSuccess(idBook));
    } catch (error) {
        console.error("Erreur lors de la suppression du livre:", error);
    }
};

export default deleteBook;
