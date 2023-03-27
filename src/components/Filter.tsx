import React from "react";
import {ICharactersFiltersProps} from "../types/interfaces";

const Filter = (props: ICharactersFiltersProps) => {
    const {category, filteredCategoryOptions, onSelect} = props;

    return (
        <div className="filter">
            <select onChange={onSelect} className="dropdown">
                <option>Choose a {category} </option>
                {filteredCategoryOptions.map((element) => (
                    <option key={element.id}>{element}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter