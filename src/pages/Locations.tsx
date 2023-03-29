import {useEffect, useState} from "react";
import axios from "axios";
import LocationCard from "../components/LocationCard";
import {ILocation} from "../types/interfaces";
import {Link} from "react-router-dom";

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location')
            .then(response => {
                setLocations(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const locationsList = locations;
    console.log("2", locationsList)

    return (
        <div className="locations-page">
            <h1 id="locations">Locations of Rick & Morty universe </h1>

            <div className="location-cards-container">

                    {locationsList.map((location: ILocation) => (
                        <Link to="/characters" className="locations-link">
                        <LocationCard id={location.id}
                                      name={location.name}
                                      type={location.type}
                                      dimension={location.dimension}
                                      number_of_residents={location.residents.length}/>
                        </Link>
                    ))}

            </div>


        </div>
    )
}

export default Locations