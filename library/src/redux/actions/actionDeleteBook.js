import { DELETE_BOOK } from "../constants";

const deleteBook = (idBook) => {
    return {
        type: DELETE_BOOK,
        idBook: idBook,
    };
};

export default deleteBook;
