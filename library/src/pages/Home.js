import React from 'react';
import Collection from '../components/Collection';

const Home = () => {
    return (
        <div>
            <h1>Bienvenue sur Library</h1>
            <h2>Que voulez vous faire aujourd'hui ?</h2>
            <div>
                <button>Voir la collection</button>
                <button>Ajouter un livre</button>
                <button>Ajouter un autheur</button>
            </div>
        </div>
    );
};



export default Home;