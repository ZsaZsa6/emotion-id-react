const gamesReducer = (state = { games: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_GAMES":
      return {
        ...state,
        games: [...state.games],
        loading: true,
      };
    case "LOAD_GAMES":
      return {
        ...state,
        games: action.games,
        loading: false,
      };
   
    case "LOADING_GAME":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_GAME":
      return {
        ...state,
        games:[...state.games, action.game],
        loading: false,
      };
      case "UPDATE_CHALLENGE":
        return {
          ...state, 
          games: [...state.games, action.game]
        }
      
      default:
      return state;
  }
};

export default gamesReducer;
