import { EDIT_BOOK } from "../constants";

const editBookSuccess = (idBook, book) => {
    return {
        type: EDIT_BOOK,
        idBook: idBook,
        book: book
    };
};

const editBook = (idBook, book) => async (dispatch) => {
    try {
        // console.log('Editing book with id:', idBook);
        // console.log('Book data:', book);

        const response = await fetch(`http://localhost:5000/${idBook}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const updatedBook = await response.json();
        console.log('Updated book data:', updatedBook);

        dispatch(editBookSuccess(idBook, updatedBook));
    } catch (error) {
        console.error("Erreur lors de l'édition du livre", error);
    }
}

export default editBook;
