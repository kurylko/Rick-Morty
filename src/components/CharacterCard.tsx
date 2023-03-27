import React from "react";
import {ICharacter} from "../types/interfaces";

const CharacterCard = (props: ICharacter) => {
    const {image, name, status, species, gender, origin} = props;

    return (
        <div className="characterCard">
            <div className="character-image" style={{backgroundImage: `url(${image})`}}></div>
            <div className="character-infobox">
                <div className="character-name">{name} </div>
                <div className="characters-infobox-info">
                    <div className="character-info-questions">
                        <li className="character-info">Status:</li>
                        <li className="character-info">Species:</li>
                        <li className="character-info">Gender:</li>
                        <li className="character-info">Origin:</li>
                    </div>
                    <div className="character-info-answers">
                        <li className="character-info">{status}</li>
                        <li className="character-info">{species}</li>
                        <li className="character-info">{gender}</li>
                        <li className="character-info">{origin}</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard