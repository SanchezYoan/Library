
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK, ALL_COLLECTION, SET_BOOKS } from "../constants";


const initialState = {
    existingBooks: [],
};


const reducerBooks = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                existingBooks: action.books,
            };
        case ALL_COLLECTION:
            return {
                ...state,
                existingBooks: state.existingBooks,
            };
        case ADD_BOOK:
            return {
                ...state,
                existingBooks: [...state.existingBooks, action.book]
            };

        case EDIT_BOOK:
            return {
                ...state,
                existingBooks: state.existingBooks.map((book) => {
                    if (book._id === action.idBook) {
                        console.log("successFull");
                        return {
                            ...book,
                            ...action.book
                        };
                    } else {
                        console.log("not success", action.idBook, book._id);
                        return book;
                    }
                }),
            };
        case DELETE_BOOK:
            return {
                ...state,
                existingBooks: state.existingBooks.filter((book) => book._id !== action.idBook),
            };
        default:
            return state;
    }
};

export default reducerBooks;
