import { SHOW_HIDE } from '../constants';

const initialState = {
    addBook: false,
    collection: false,
    addAuthor: false,
};
const reducerDisplay = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HIDE:
            if (action.payload === "addBook") {
                const newBool = !state.addBook
                return {
                    ...state,
                    addBook: newBool
                }
            }
            if (action.payload === "collection") {
                const newBool = !state.collection
                return {
                    ...state,
                    collection: newBool
                }
            }
            break
        default:
            return state
    }
};

export default reducerDisplay;