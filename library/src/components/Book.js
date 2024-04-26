import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Book = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await axios.get("http://localhost:5000")
            setBooks(data)
        }
        fetchBooks()
    })
    return (
        <div>
            {books.map((book) => {
                return <h3>{book.title}</h3>
            })}
        </div>
    );
};

export default Book;
