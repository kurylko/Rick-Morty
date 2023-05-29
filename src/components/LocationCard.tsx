import React from "react";
import {ICharacter, ILocation} from "../types/interfaces";

const LocationCard = (props: ILocation) => {
    const {name, type, dimension, number_of_residents, residents} = props;
    return (
        <div className="locationCard">
            <div className="location-name">{name}</div>
            <div className="location-infoBox">
                <div className="location-question">
                    <li className="location-info">Type:</li>
                    <li className="location-info">Dimension:</li>
                    <li className="location-info">Number of residents:</li>
                </div>
                <div className="location-answer">
                    <li className="location-info">{type}</li>
                    <li className="location-info">{dimension}</li>
                    <li className="location-info">{number_of_residents}</li>
                </div>
            </div>

        </div>
    )
};

export default LocationCard