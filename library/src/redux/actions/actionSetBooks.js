import axios from "axios";
import { SET_BOOKS } from "../constants";

const setBooks = (books) => ({
    type: SET_BOOKS,
    books: books,
});

export const fetchBooks = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:5000");
        const books = response.data;
        dispatch(setBooks(books));
    } catch (error) {
        console.error("Erreur lors de la récupération des livres", error);
    }
};

