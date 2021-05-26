import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer.js";
import challengesReducer from "./challengesReducer.js";
import challengeAnswersReducer from "./challengeAnswersReducer.js"
export default combineReducers({ games: gamesReducer, challenges: challengesReducer, challenge_answer: challengeAnswersReducer});
