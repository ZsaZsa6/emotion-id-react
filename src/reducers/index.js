import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer.js";
import challengeReducer from "./challengeReducer.js";
export default combineReducers({ games: gamesReducer, challenge: challengeReducer });
