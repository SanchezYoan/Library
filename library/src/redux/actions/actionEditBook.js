import { EDIT_BOOK } from "../constants";

const editBook = (bookId) => {
    return {
        type: EDIT_BOOK,
        bookId: bookId,
    };
};

export default editBook;
