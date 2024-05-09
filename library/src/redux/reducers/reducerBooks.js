
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "../constants";
import axios from 'axios';


const books = axios.get("http://localhost:5000")

const initialState = {
    existingBooks: books,
};

const reducerCourses = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            try {
                console.log("ADD_BOOK");
                axios.post('http://localhost:5000/', action)
                console.log("Book is added")
            } catch (err) {
                console.log(err.message);
            }
        case EDIT_BOOK:
        case DELETE_BOOK:

        default:
            return state;
    }
};

export default reducerCourses;
