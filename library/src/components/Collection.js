import React from 'react';

const Collection = () => {
    return (
        <div>
            <h1>Books</h1>
            <div>
                <button>Ajouter un nouveau livre</button>

                <form>
                    <div>

                        <label htmlFor="name">Titre</label>
                        <input
                            type="text"
                            id="name"
                        />
                    </div>
                    <div>

                        <label htmlFor="genre">Genres</label>
                        <input
                            type="text"
                            id="genre"
                        />
                    </div>

                    <div>

                        <label htmlFor="Auteur">Auteur</label>
                        <input
                            type="text"
                            id="Auteur"
                        />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Collection;