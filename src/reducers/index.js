import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer.js";
import challengesReducer from "./challengesReducer.js";
import flashMessageReducer from "./flashMessageReducer.js"
export default combineReducers({ games: gamesReducer, challenges: challengesReducer, flashMessage: flashMessageReducer});
 