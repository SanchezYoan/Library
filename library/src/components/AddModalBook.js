import React from 'react';

const addBookModal = () => {
    return (
        <div className='modalBook'>
            <div>
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
                    <input type="submit" value="Ajouter un nouveau livre" />
                </form>
            </div>
        </div>
    );
};

export default addBookModal;