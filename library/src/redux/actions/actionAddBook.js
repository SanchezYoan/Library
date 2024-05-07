import { ADD_BOOK } from "../constants";

const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book: book,
  };
};

export default addBook;
