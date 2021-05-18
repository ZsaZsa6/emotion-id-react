const challengeAnswersReducer = (
  state = { challenge_answer: {}, loading: false, message: "" },
  action
) => {
  switch (action.type) {
    case "SENDING_ANSWER":
      return {
        ...state,
        loading: true,
        message: "",
      };
      // case "CLEAR_ANSWER":


    case "SEND_ANSWER":
      return {
        ...state,
        challenge_answer: action.challenge_answer,
        loading: false,
        // ?create alert timeout redirect?
      };

    default:
      return state;
  }
};
// debugger
export default challengeAnswersReducer;
