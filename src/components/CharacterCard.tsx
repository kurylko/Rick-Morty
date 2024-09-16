import React from "react";
import {ICharacter} from "../types/interfaces";

const CharacterCard = ({image, name, status, species, gender, origin, location}: ICharacter) => {

    return (
        <div className="card lg:card-side sm:card-side bg-base-100 shadow-xl w-full h-40">
            <figure className="h-full w-1/4">
                <img src={image} alt={`${name} image`} className='h-full'/>
            </figure>
            <div className="flex flex-col flex-1">
                <h2 className="bg-primary text-white rounded-tr-lg rounded-b-none text-center">{name} </h2>
                <div className="flex items-start ml-3 gap-3">
                    <div className="flex flex-col items-start">
                        <li className="list-none text-left text-border">Status:</li>
                        <li className="list-none text-left text-border">Species:</li>
                        <li className="list-none text-left text-border">Gender:</li>
                        <li className="list-none text-left text-border">Origin:</li>
                        <li className="list-none text-left text-border">Location:</li>
                    </div>
                    <div className="flex flex-col items-start">
                        <li className="list-none text-left text-primary">{status}</li>
                        <li className="list-none text-left text-primary">{species}</li>
                        <li className="list-none text-left text-primary">{gender}</li>
                        <li className="list-none text-left text-primary">{origin.name}</li>
                        <li className="list-none text-left text-primary">{location.name}</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard