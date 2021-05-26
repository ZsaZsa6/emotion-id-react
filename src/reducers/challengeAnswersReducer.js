const challengeAnswersReducer = (
  state = { challenge_answer: {}, loading: false },
  action
) => {
  switch (action.type) {
    case "SENDING_ANSWER":
      return {
        ...state,
        loading: true,
      };

    case "SEND_ANSWER":
      return {
        ...state,
        challenge_answer: action.challenge_answer,
        loading: false,
      };

    default:
      return state;
  }
};

export default challengeAnswersReducer;
