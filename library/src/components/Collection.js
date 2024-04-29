import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './ItemBook';

const Collection = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {

            const { data } = await axios.get("http://localhost:5000")
            setBooks(data)
        }
        fetchBooks()
    })
    return (
        <div className='collectionContainer'>
            <h1>Collection</h1>
            <div className='collectionContent'>
                <div className='itemBook'>
                    <p>Titre</p>
                    <p>Genres</p>
                    <p>Autheur</p>
                    <p>Date</p>
                </div>
                {books.map((book) => {
                    return <Book title={book.title} author={book.author} createdAt={book.createdAt} />
                })}
            </div>
        </div>
    );
};

export default Collection;