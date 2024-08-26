import React, {SyntheticEvent} from "react";

export interface ICharacter {
    id: number;
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string
    };
    location: {
        name: string
    };
}

export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    number_of_residents: number;
    residents: string[];
}

export interface InputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchInput: string;
    placeholder: string;
}


export interface ICharactersFiltersProps {
    filteredCategoryOptions: string[];
    onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    category: string
}