import charactersReducer from "./characters";
import {combineReducers} from "redux";

export const allReducers = combineReducers({
    characters: charactersReducer
});
