import React from "react";
import {ILocation} from "../types/interfaces";

const LocationCard = (props: ILocation) => {
    const {name, type, dimension, number_of_residents} = props;
    return (
        <div className="flex flex-col w-4/5 rounded-lg border-solid border-1 border-border hover:bg-secondary bg-base-100 shadow-xl">
            <div className="flex w-full h-10 bg-primary text-white justify-center font-normal items-center rounded-t-lg rounded-b-none">{name}</div>
            <div className="flex w-full gap-3 p-3.5">
                <div className="flex flex-col items-start">
                    <li className="list-none text-left text-border">Type:</li>
                    <li className="list-none text-left text-border">Dimension:</li>
                    <li className="list-none text-left text-border">Number of residents:</li>
                </div>
                <div className="flex flex-col items-start">
                    <li className="list-none text-left text-primary">{type}</li>
                    <li className="list-none text-left text-primary">{dimension}</li>
                    <li className="list-none text-left text-primary">{number_of_residents}</li>
                </div>
            </div>

        </div>
    )
};

export default LocationCard