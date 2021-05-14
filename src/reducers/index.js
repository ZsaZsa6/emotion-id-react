import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer.js";
import challengesReducer from "./challengesReducer.js";
export default combineReducers({ games: gamesReducer, challenges: challengesReducer });
