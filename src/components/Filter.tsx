import React from "react";
import {ICharacter, ICharactersFiltersProps} from "../types/interfaces";

const Filter = ({category, filteredCategoryOptions, onSelect} : ICharactersFiltersProps) => {

    return (
        <div className="filter">
            <select onChange={onSelect} className="dropdown">
                <option>Choose a {category} </option>
                {filteredCategoryOptions.map((element : ICharacter) => (
                    <option key={element.id}>{element}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter