import CharacterCard from "../components/CharacterCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {ICharacter} from "../types/interfaces";
import {useLocation} from 'react-router-dom';


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then(response => {
                setCharacters(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, [currentPage]);


    const charactersList = characters;

    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    };
    const {search} = useLocation();
    const locationParam = new URLSearchParams(search).get('location') || '';
    const locationNumber = Number(locationParam);

    console.log(locationNumber)


    let statusOptions = ["Alive", "Dead", "unknown"];
    let speciesOptions = ["Human", "Alien"];
    let genderOptions = ["Female", "Male", "Genderless", "unknown"];

    const [selectedStatus, setSelectedStatus] = useState();
    const [selectedSpecies, setSelectedSpecies] = useState();
    const [selectedGender, setSelectedGender] = useState();

    const handleSelectStatus = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleSelectSpecies = (event) => {
        setSelectedSpecies(event.target.value);
    };
    const handleSelectGender = (event) => {
        setSelectedGender(event.target.value);
    };


    const filteredCharacters = charactersList.filter((character) => {

        const locationUrl = character.location.url;
        const locationSegments = locationUrl.split("/");
        const locationIdFromUrl = locationSegments.pop();
        const locationId = Number(locationIdFromUrl);

        let isMatchedBySearch =
            character.name.toLowerCase().includes(searchInput.toLowerCase()) || !searchInput;
        let isMatchedByStatus = character.status === selectedStatus || !selectedStatus;
        let isMatchedBySpecies = character.species === selectedSpecies || !selectedSpecies;
        let isMatchedByGender = character.gender === selectedGender || !selectedGender;
        let isMatchedByOrigin = locationId === locationNumber || !locationNumber;
        console.log(locationId, locationNumber)
        console.error('->', locationId === locationNumber)
        return (
            isMatchedBySearch &&
            isMatchedByStatus &&
            isMatchedBySpecies &&
            isMatchedByGender &&
            isMatchedByOrigin
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
        <div className="characters-page">
            <h1 id="characters"> Rick & Morty Characters </h1>
            <div className="characters-page-content">
                <div className="filter-container">
                    <h2 className="before-filters-text">Find the character </h2>
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
                <div className="character-cards">
                    {filteredCharacters.map((character: ICharacter) => {
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
                    <div className="nextPrevBtnContainer">
                        <button className="paginationBtn" onClick={handlePreviousPage}>Previous Page</button>
                        <button className="paginationBtn" onClick={handleNextPage}>Next Page</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Characters