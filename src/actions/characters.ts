import axios from "axios";
import {FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS} from "./actionTypes";

const fetchCharactersStart = () => {
    return {
        type: FETCH_CHARACTERS_START
    }
};

const fetchCharactersSuccess = (characters) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: characters
    }
};

const fetchCharactersError = (error) => {
    return {
        type: FETCH_CHARACTERS_ERROR,
        payload: error
    }
};


export const actionGetCharactersList = ({residents, page}) => {
    return function (dispatch) {
        dispatch(fetchCharactersStart());
        axios.get(`https://rickandmortyapi.com/api/character/${residents}?page=${page}`)
            .then(response => {
                console.log("response", response)
                dispatch(fetchCharactersSuccess(residents ? response.data : response.data.results))
            })
            .catch(error => {
                dispatch(fetchCharactersError(error))
            });
}};