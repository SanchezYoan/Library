import { ADD_BOOK } from "../constants";

const addBookSuccess = (book) => ({
  type: ADD_BOOK,
  book: book,
});

const addBook = (book) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const addedBook = await response.json();
    dispatch(addBookSuccess(addedBook));

  } catch (error) {
    console.error("Erreur lors de l'ajout du livre:", error);
  }
};

export default addBook;
