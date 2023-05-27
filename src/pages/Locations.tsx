import {useEffect, useState} from "react";
import axios from "axios";
import LocationCard from "../components/LocationCard";
import {ILocation} from "../types/interfaces";
import {Link} from "react-router-dom";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/?page=${currentPage}`)
            .then(response => {
                setLocations(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, [currentPage]);

    const locationsList = locations;

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };



    return (
        <div className="locations-page">
            <h1 id="locations">Locations of Rick & Morty universe </h1>

            <div className="location-cards-container">

                {locationsList.map((location: ILocation) => (
                    <Link to={`/characters/${location.name}`} className="locations-link">
                        <LocationCard id={location.id}
                                      name={location.name}
                                      type={location.type}
                                      dimension={location.dimension}
                                      number_of_residents={location.residents.length}/>
                    </Link>
                ))}
                <div className="nextPrevBtnContainer">
                    <button className="paginationBtn" onClick={handlePreviousPage}>Previous Page</button>
                    <button className="paginationBtn" onClick={handleNextPage}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default Locations