import React from "react";
import {ICharactersFiltersProps} from "../types/interfaces";

const Filter = ({category, filteredCategoryOptions, onSelect}: ICharactersFiltersProps) => {

    return (
        <div className="block w-2/3">
            <select onChange={onSelect} className="flex m-30 h-55 w-full select select-bordered my-2">
                <option className="btn m-1">Choose a {category} </option>
                {filteredCategoryOptions.map((element) => (
                    <option key={element}>{element}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter