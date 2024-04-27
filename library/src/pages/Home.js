import React, { useState } from 'react';
import Collection from '../components/Collection';

import AddModalBook from '../components/AddModalBook';

const Home = () => {
    // Variable d'état pour afficher la collection
    const [isCollection, setIsCollection] = useState(false)
    // Variable d'état pour afficher la modal addBook
    const [isModal, setIsModal] = useState(false)

    return (
        <div className='homeContainer'>
            <div className='headerContainer'>
                <h1>Bienvenue sur Library</h1>
                <h2>Que voulez vous faire aujourd'hui ?</h2>
            </div>
            <div className='actionContainer'>
                <button onClick={() => setIsCollection(!isCollection)}>Voir la collection</button>

                <button onClick={() => setIsModal(!isModal)}>Ajouter un livre</button>

                <button>Ajouter un livre</button>

                <button>Ajouter un autheur</button>
            </div>
            {
                isCollection ? (
                    <Collection />
                ) : (
                    <></>
                )
            }

            <>
                {
                    isModal ? (
                        <AddModalBook />
                    ) : (
                        <></>
                    )
                }
            </>


        </div>
    );
};



export default Home;