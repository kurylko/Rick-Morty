import {useEffect, useState} from "react";
import axios from "axios";
import LocationCard from "../components/LocationCard";
import {ILocation} from "../types/interfaces";

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
    console.log(locationsList)

    let numberOfResidents = locationsList.forEach((location) =>
        location.residents.length;
)

    console.log(numberOfResidents)

    return (
        <div className="locations-page">
            Locations page
            {locationsList.map((location: ILocation) => (
                <LocationCard id={location.id}
                              name={location.name}
                              type={location.type}
                              dimension={location.dimension}
                              residents={location.residents}/>
            ))}
        </div>
    )
}

export default Locations