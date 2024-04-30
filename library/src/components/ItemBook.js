import React, { useState } from 'react';
import UpdateModal from './UpdateModal';


const Book = ({ title, genres, author, createdAt, idBook }) => {

    const [showUpdateModal, setshowUpdateModal] = useState(false)

    return (
        <div>

            <div className='itemBook' onClick={() => setshowUpdateModal(!showUpdateModal)}>
                <p >{title.toUpperCase()}</p>
                <p >{genres}</p>
                <p >{author}</p>
                <p >{new Date(createdAt).toLocaleDateString()}</p>

            </div>
            {
                showUpdateModal ? (

                    <UpdateModal idBook={idBook} title={title} genres={genres} author={author} />
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default Book;
