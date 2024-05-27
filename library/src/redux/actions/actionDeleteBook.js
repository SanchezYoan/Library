import { DELETE_BOOK } from "../constants";

const deleteBookSuccess = (idBook) => {
    return {
        type: DELETE_BOOK,
        idBook: idBook,
    };
};

const deleteBook = (idBook) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:5000/${idBook}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        dispatch(deleteBookSuccess(idBook));
    } catch (error) {
        console.error("Erreur lors de la suppression du livre", error.message);
    }
};

export default deleteBook;
