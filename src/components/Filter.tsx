import React from "react";
import {ICharactersFiltersProps} from "../types/interfaces";

const Filter = ({category, filteredCategoryOptions, onSelect}: ICharactersFiltersProps) => {

    return (
        <div className="block">
            <select onChange={onSelect} className="flex m-30 h-55 w-230 select select-bordered">
                <option className="btn m-1">Choose a {category} </option>
                {filteredCategoryOptions.map((element) => (
                    <option key={element}>{element}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter