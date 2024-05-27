import { SET_BOOKS } from "../constants";

const setBooks = (books) => ({
    type: SET_BOOKS,
    books: books,
});

export const fetchBooks = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:5000');

        if (!response.ok) {
            throw new Error('Network response has problem ' + response.statusText);
        }

        const books = await response.json();
        dispatch(setBooks(books));
    } catch (error) {
        console.error("Erreur lors de la récupération des livres", error);
    }
};
