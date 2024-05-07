import { DELETE_BOOK } from "../constants";

const deleteBook = (bookId) => {
    return {
        type: DELETE_BOOK,
        bookId: bookId,
    };
};

export default deleteBook;
