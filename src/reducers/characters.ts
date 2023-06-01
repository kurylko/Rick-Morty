import {FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS} from "../actions/actionTypes";


const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_START :
            return {...state, isLoading: true};
        case FETCH_CHARACTERS_SUCCESS :
            return {...state, isLoading: false, data: action.payload};
        case FETCH_CHARACTERS_ERROR :
            return {...state, isLoading: false, error: action.payload};
        default :
            return state;
    }
}

export default charactersReducer;