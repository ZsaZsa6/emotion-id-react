const gameReducer = (state = { games: [], loading: false }, action) => {
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
          game: [...state.game],
          loading: true,
        };
        case "LOAD_GAME":
          return {
            ...state,
            game: action.game,
            loading: false,
          }
    default:
      return state;
  }
};

export default gameReducer;
