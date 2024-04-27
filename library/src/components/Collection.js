import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './ItemBook';

const Collection = () => {
    // Liste des livres de la collection
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            // point d'entre 
            const { data } = await axios.get("http://localhost:5000")
            setBooks(data)
        }
        fetchBooks()
    })
    return (
        <div className='collectionContainer'>
            <h1>Collection</h1>
            <div className='collectionContent'>

                {books.map((book) => {
                    return <Book title={book.title} author={book.author} createdAt={book.createdAt} />
                })}
            </div>
        </div>
    );
};

export default Collection;