import React from "react";
import {ICharacter} from "../types/interfaces";

const CharacterCard = ({image, name, status, species, gender, origin, location} : ICharacter) => {

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-full">
            <figure>
                <img src={image} alt={`${name} image`}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name} </h2>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
                <p>Origin: {origin.name}</p>
                <p>Location: {location.name}</p>
            </div>
        </div>
    )

    {/*
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
                        <li className="character-info">{origin.name}</li>
                        <li className="character-info">{location.name}</li>
                    </div>
                </div>
            </div>
        </div>
        */}
}

export default CharacterCard