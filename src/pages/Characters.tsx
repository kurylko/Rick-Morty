import CharacterCard from "../components/CharacterCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {ICharacter} from "../types/interfaces";
import {useParams} from 'react-router-dom';
import Banner from "../components/Banner";


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { residents = '' } = useParams();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${residents}?page=${currentPage}`)
            .then(response => {
                setCharacters(residents ? response.data : response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, [currentPage, residents]);

    const charactersList = characters || [];



    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const statusOptions = ["Alive", "Dead", "unknown"];
    const speciesOptions = ["Human", "Alien"];
    const genderOptions = ["Female", "Male", "Genderless", "unknown"];



    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    const handleSelectStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatus(event.target.value);
    };

    const handleSelectSpecies = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSpecies(event.target.value);
    };

    const handleSelectGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGender(event.target.value);
    };



    const finalListOfCharacters = charactersList.filter((character: ICharacter) => {

        const isMatchedBySearch =
            character.name.toLowerCase().includes(searchInput.toLowerCase()) || !searchInput;
        const isMatchedByStatus = character.status === selectedStatus || !selectedStatus;
        const isMatchedBySpecies = character.species === selectedSpecies || !selectedSpecies;
        const isMatchedByGender = character.gender === selectedGender || !selectedGender;

        return (
            isMatchedBySearch &&
            isMatchedByStatus &&
            isMatchedBySpecies &&
            isMatchedByGender
        );
    });


    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };


    return (
        <div className="flex flex-col w-full items-center justify-center gap-3 bg-light">
            <h1 className="text-3xl font-bold mt-3"> Rick & Morty Characters </h1>
            <div className="flex w-10/12 lg:justify-between sm:gap-3 mt-3 self-center">
                <div className="flex flex-col w-1/3 pl-10 gap-2 items-center">
                    <Banner />
                    <h2 className="text-purple-600 text-2xl font-bold my-3">Find the character </h2>
                    <SearchBar handleChange={handleChange} searchInput={searchInput}
                               placeholder={"Type the name of character..."}/>
                    <Filter
                        category={"status"}
                        filteredCategoryOptions={statusOptions}
                        onSelect={handleSelectStatus}
                    />
                    <Filter
                        category={"species"}
                        filteredCategoryOptions={speciesOptions}
                        onSelect={handleSelectSpecies}
                    />
                    <Filter
                        category={"gender"}
                        filteredCategoryOptions={genderOptions}
                        onSelect={handleSelectGender}
                    />
                </div>
                <div className="flex flex-col items-center w-2/3 gap-3">
                    {finalListOfCharacters.map((character: ICharacter) => {
                        return (
                            <CharacterCard
                                key={character.id}
                                {...character}
                            />
                        );
                    })}
                    <div className="flex w-2/3 py-10 place-content-around">
                        <button className="rounded-lg border-solid border-1 border-cyan-700" onClick={handlePreviousPage}>Previous Page</button>
                        <button className="rounded-lg border-solid border-1 border-cyan-700" onClick={handleNextPage}>Next Page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters