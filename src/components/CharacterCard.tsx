import React from "react";
import {ICharacter} from "../types/interfaces";

const CharacterCard = (props: ICharacter) => {
    const {image, name, status, species, gender, origin, location} = props;

    return (
        <div className="characterCard">
            <div className="character-image-container">
                <img className="character-image" src={image} alt={`${name} image`}/>
            </div>
            <div className="character-infobox">
                <div className="character-name">{name} </div>
                <div className="characters-infobox-info">
                    <div className="character-info-questions">
                        <li className="character-info">Status:</li>
                        <li className="character-info">Species:</li>
                        <li className="character-info">Gender:</li>
                        <li className="character-info">Origin:</li>
                        <li className="character-info">Location:</li>
                    </div>
                    <div className="character-info-answers">
                        <li className="character-info">{status}</li>
                        <li className="character-info">{species}</li>
                        <li className="character-info">{gender}</li>
                        <li className="character-info">{origin}</li>
                        <li className="character-info">{location}</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard