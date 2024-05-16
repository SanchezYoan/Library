import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addBook from '../redux/actions/actionAddBook';

const AddBookModal = ({ modal }) => {
    // États pour stocker les valeurs du formulaire
    const [title, setTitle] = useState("");
    const [genres, setGenres] = useState("");
    const [author, setAuthor] = useState("");

    const dispatch = useDispatch()

    // Ajouter un livre à la collection
    const handleAddBook = (e) => {
        e.preventDefault();
        const book = {
            title: title,
            genres: genres,
            author: author
        };
        try {
            dispatch(addBook(book))
            setTitle("")
            setGenres("")
            setAuthor("")
        } catch (err) {
            console.log(err.message);
        }

        console.log(book);
    };

    return (
        <div className='modalBook' >
            <form onSubmit={handleAddBook}>
                <div id="crossModal" onClick={() => modal(false)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="inputAddBook">
                    <label htmlFor="name">Titre</label>
                    <input
                        type="text"
                        id="name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="inputAddBook">
                    <label htmlFor="genre">Genres</label>
                    <input
                        type="text"
                        id="genre"
                        value={genres}
                        onChange={(e) => setGenres(e.target.value)}
                    />
                </div>
                <div className="inputAddBook">
                    <label htmlFor="auteur">Auteur</label>
                    <input
                        type="text"
                        id="auteur"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="submit">
                    <input type="submit" value="Ajouter" id="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddBookModal;
