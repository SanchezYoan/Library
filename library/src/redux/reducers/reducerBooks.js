
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK, ALL_COLLECTION, SET_BOOKS } from "../constants";
import axios from 'axios';

const serializeNewBook = (book) => {
    return {
        title: book.title,
        genres: book.genres,
        author: book.author,
    };
};

export const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books,
});

// Fonction pour récupérer les livres depuis l'API
export const fetchBooks = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000");
            const books = response.data;
            dispatch(setBooks(books));
        } catch (error) {
            console.error("Erreur lors de la récupération des livres", error);
        }
    };
};

const initialState = {
    existingBooks: [],
};


const reducerBooks = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                existingBooks: action.payload,
            };
        case ALL_COLLECTION:
            return state.existingBooks;
        case ADD_BOOK:
            try {
                console.log("ADD_BOOK");
                axios.post('http://localhost:5000/', action.book)
                const newBook = serializeNewBook(action.book);
                return {
                    ...state,
                    existingBooks: state.existingBooks.concat(newBook),
                };
            } catch (err) {
                console.log(err.message);
            }

        // case EDIT_BOOK:
        // case DELETE_BOOK:
        default:
            return state;
    }
};

export default reducerBooks;
