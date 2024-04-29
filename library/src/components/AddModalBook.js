import React, { useState } from 'react';

const AddBookModal = ({ modal }) => {
    // États pour stocker les valeurs du formulaire
    const [title, setTitle] = useState("");
    const [genres, setGenres] = useState("");
    const [author, setAuthor] = useState("");

    // Fonction pour gérer la soumission du formulaire
    const handleAddBook = (e) => {
        e.preventDefault(); // Empêche le rafraîchissement de la page lors de la soumission du formulaire
        // Créez un nouvel objet book avec les valeurs actuelles du formulaire
        const book = {
            title: title,
            genres: genres,
            author: author
        };
        // Vous pouvez faire quelque chose avec l'objet book ici, par exemple, l'envoyer à une fonction parent via les props
        console.log(book);
    };

    return (
        <div className='modalBook'>
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
