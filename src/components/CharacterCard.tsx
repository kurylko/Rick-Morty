import React from "react";
import {ICharacter} from "../types/interfaces";

const CharacterCard = ({image, name, status, species, gender, origin, location} : ICharacter) => {

    return (
        <div className="card lg:card-side sm:card-side bg-base-100 shadow-xl w-full h-40">
            <figure className="h-full w-1/4">
                <img src={image} alt={`${name} image`} className='h-full'/>
            </figure>
            <div className="flex flex-col flex-1">
                <h2 className="bg-primary text-white rounded-tr-lg rounded-b-none text-center">{name} </h2>
                <div className="flex flex-col items-start ml-3 gap-1">
                    <p>Status: {status}</p>
                    <p>Species: {species}</p>
                    <p>Gender: {gender}</p>
                    <p>Origin: {origin.name}</p>
                    <p>Location: {location.name}</p>
                </div>

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