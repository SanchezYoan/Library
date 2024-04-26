import React, { useState } from 'react';
// import Collection from '../components/Collection';
import Book from '../components/Book';

const Home = () => {
    const [isCollection, setIsCollection] = useState(false)
    return (
        <div className='homeContainer'>
            <div className='headerContainer'>
                <h1>Bienvenue sur Library</h1>
                <h2>Que voulez vous faire aujourd'hui ?</h2>
            </div>
            <div className='actionContainer'>
                <button onClick={() => setIsCollection(!isCollection)}>Voir la collection</button>
                <button>Ajouter un livre</button>
                <button>Ajouter un autheur</button>
            </div>
            {
                isCollection ? (
                    <Book />
                ) : (
                    <></>
                )
            }
        </div>
    );
};



export default Home;