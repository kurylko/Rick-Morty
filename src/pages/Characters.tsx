import CharacterCard from "../components/CharacterCard";
import Filter from "../components/Filter";
import {useEffect, useState} from "react";
import axios from "axios";
import {ICharacter} from "../types/interfaces";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const charactersList = characters;


    return (
        <div className="characters-page">
            <h1 id="characters"> Rick & Morty Characters </h1>
            <div className="characters-page-content">
                <div className="filter-container">
                    <Filter/>
                </div>
                <div className="character-cards">
                    {charactersList.map((character: ICharacter) => {
                        const {name} = character.origin;
                        return (
                            <CharacterCard
                                key={character.id}
                                image={character.image}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                origin={character.origin.name}
                                id={character.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Characters