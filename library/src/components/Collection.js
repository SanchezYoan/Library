import React, { useEffect } from 'react';
import Book from './ItemBook';
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from '../redux/actions/actionSetBooks';

const Collection = () => {
    const dispatch = useDispatch();

    // Library collection
    const dataBooks = useSelector((state) => state.books.existingBooks)

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

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

                {dataBooks.map((book, index) => {
                    return <Book title={book.title} genres={book.genres} author={book.author} createdAt={book.createdAt} key={index} idBook={book._id} />

                })}
            </div>
        </div>
    );
};

export default Collection;