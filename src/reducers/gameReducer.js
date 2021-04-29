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
    default:
      return state;
  }
};

export default gameReducer;
