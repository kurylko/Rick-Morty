import {useEffect, useState} from "react";
import axios from "axios";
import LocationCard from "../components/LocationCard";
import {ILocation} from "../types/interfaces";
import {Link} from "react-router-dom";

const Locations = () => {
    const [locations, setLocations] = useState<ILocation[]>([]);
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

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };


    return (
        <div className="flex flex-col w-screen gap-3 items-center justify-center bg-light">
            <h1 id="locations" className="text-3xl font-bold mt-3">Locations of Rick & Morty universe </h1>

            <div className="flex flex-col w-4/5 justify-center gap-3 items-center mt-3">
                {locations.map((location) => {
                    const residents = location['residents'];
                    const parsedResidents = residents.map(resident => resident.split('/').slice(-1)[0]).join(',')

                    return <Link to={`/characters/${parsedResidents}`}
                                 className="flex flex-col w-full justify-center items-center gap-3">
                        <LocationCard
                            {...location}
                            id={location.id}
                            name={location.name}
                            type={location.type}
                            dimension={location.dimension}
                            number_of_residents={location.residents.length}/>
                    </Link>
                })}
                <div className="flex w-1/3 py-10 place-content-around">
                    <button className="rounded-lg border-solid border-1 border-cyan-700"
                            onClick={handlePreviousPage}>Previous Page
                    </button>
                    <button className="rounded-lg border-solid border-1 border-cyan-700" onClick={handleNextPage}>Next
                        Page
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Locations