import React from 'react';
import Collection from '../components/Collection';

import AddModalBook from '../components/AddModalBook';
import { useDispatch, useSelector } from 'react-redux';
import showHideComponent from '../redux/actions/actionShowHide';

const Home = () => {
    const dispatch = useDispatch()

    // Variable d'état pour afficher la collection
    const displayAddBook = useSelector((state) => state.display.addBook)
    // Variable d'état pour afficher la modal addBook
    const displayCollection = useSelector((state) => state.display.collection)



    return (
        <div className='homeContainer'>
            <div className='headerContainer'>
                <h1>Bienvenue sur Library</h1>
                <h2>Que voulez vous faire aujourd'hui ?</h2>
            </div>
            <div className='actionContainer'>
                <button onClick={() => dispatch(showHideComponent("collection"))}>Voir la collection</button>
                <>
                    {
                        displayAddBook ? (
                            <AddModalBook />
                        ) : (
                            <button onClick={() => dispatch(showHideComponent("addBook"))}>Ajouter un livre</button>

                        )
                    }
                </>


                <button>Ajouter un autheur</button>
            </div>
            {
                displayCollection ? (
                    <Collection />
                ) : (
                    <></>
                )
            }

        </div>
    );
};



export default Home;