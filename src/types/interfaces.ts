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
    residents: []
}