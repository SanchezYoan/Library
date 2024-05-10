import React, { useEffect, useState } from 'react';
import Book from './ItemBook';
import { useSelector } from "react-redux";

const Collection = () => {
    // const [books, setBooks] = useState([])

    const dataBooks = useSelector((state) => state.books.existingBooks).then((res) =>
        res.data
    )
    console.log(dataBooks);
    useEffect(() => {
        const fetchBooks = async () => {
            // setBooks(dataBooks)
        }
        fetchBooks()
    }, [dataBooks])
    // run useEffect when data is changed
    return (
        <div className='collectionContainer'>
            <h1>Collection</h1>
            <div className='collectionContent'>
                <div className='itemBook' id="itemBookTitle">
                    <p>Titre</p>
                    <p>Genres</p>
                    <p>Autheur</p>
                    <p>Date</p>
                </div>
                {/* {books.map((book) => {
                    return <Book title={book.title} genres={book.genres} author={book.author} createdAt={book.createdAt} idBook={book._id} />
                })} */}
            </div>
        </div>
    );
};

export default Collection;