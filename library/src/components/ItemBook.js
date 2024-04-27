import React from 'react';


const Book = ({ title, author, createdAt }) => {

    return (
        <div className='itemBook'>
            <p id="title">{title.toUpperCase()}</p>
            <p id="author">{author}</p>
            <p id="date">{new Date(createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default Book;
