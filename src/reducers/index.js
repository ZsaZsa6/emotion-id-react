import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer.js";
export default combineReducers({ games: gamesReducer});
