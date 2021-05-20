const challengesReducer = (state = { list: [], faces: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_CHALLENGE":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_CHALLENGE":
      return {
        ...state,
        list: [...state.list, state.faces, action.challenge],

        loading: false,
      };
     
            
    default:
      return state;
  }
};
export default challengesReducer;
