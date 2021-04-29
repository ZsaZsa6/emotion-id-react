import { combineReducers } from "redux";
import gameReducer from "./gameReducer.js";
export default combineReducers({ games: gameReducer });
