// import {fetchGames from '../actions/gameActions';
// const initialState = {
  
//   games: {}
// };
export default function gameReducer(state = [], action) {
    switch (action.type) {
      case 'LOAD_GAMES': 
        return{
          games: action.payload
        }

       

        default:
            return state
    
    }
}

