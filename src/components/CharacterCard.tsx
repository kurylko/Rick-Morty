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
}

export default CharacterCard