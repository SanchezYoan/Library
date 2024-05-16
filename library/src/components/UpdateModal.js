import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import deleteBook from '../redux/actions/actionDeleteBook';

const UpdateModal = ({ idBook, title, genres, author }) => {

    const [update, setUpdate] = useState(false)
    const [editTitle, setEditTitle] = useState(title);
    const [editGenres, setEditGenres] = useState(genres);
    const [editAuthor, setEditAuthor] = useState(author);

    const dispatch = useDispatch()
    // Editer un livre de la collection
    const handleEditBook = (e) => {

        e.preventDefault();
        const data = {
            title: editTitle,
            genres: editGenres,
            author: editAuthor
        };
        try {
            axios.put('http://localhost:5000/' + idBook, data)
            console.log("Book is update")
            setUpdate(false)
        } catch (err) {
            console.log(err.message);
        }
    };



    // Supprimer un livre de la collection
    const handleDeleteBook = () => {
        const userConfirmed = window.confirm(`Êtes-vous sûr de vouloir supprimer le livre "${title}" de ${author} ?`);
        if (userConfirmed) {
            dispatch(deleteBook(idBook))
        } else {
            console.log("Suppression annulée par l'utilisateur.");
        }

    }
    return (
        <div>
            {!update ? (
                <>
                    <button onClick={() => setUpdate(!update)}>Update</button>
                    <button onClick={() => handleDeleteBook()}>Delete</button>
                </>
            ) : (
                <>
                    <div className='itemBook'>
                        <input type="text" placeholder={title} onChange={(e) => setEditTitle(e.target.value)} />
                        <input type="text" placeholder={genres} onChange={(e) => setEditGenres(e.target.value)} />
                        <input type="text" placeholder={author} onChange={(e) => setEditAuthor(e.target.value)} />
                        <button onClick={(e) => handleEditBook(e)}>update</button>
                        <button onClick={() => setUpdate(!update)}>cancel</button>
                    </div>
                </>
            )}
        </div>
    )
};

export default UpdateModal;