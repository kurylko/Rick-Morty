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
}

export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: number;
}

export interface InputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchInput: string;
    placeholder: string;
}


export interface ICharactersFiltersProps {
    filteredCategoryOptions: string;
    onSelect: (e: SyntheticEvent<HTMLDivElement>) => void;
    category: string
}