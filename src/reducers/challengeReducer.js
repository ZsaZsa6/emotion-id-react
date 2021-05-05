const challengeReducer = (
  state = { challenge: [], loading: false },
  action
) => {
  switch (action.type) {
    case "LOADING_CHALLENGE":
      return {
        ...state,
        challenge: [...state.challenge],
        loading: true,
      };
    case "LOAD_CHALLENGE":
      return {
        ...state,
        challenge: action.challenge,
        loading: false,
      };
    default:
      return state;
  }
};
export default challengeReducer;
