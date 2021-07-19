let URL = "http://localhost:3000/challenges";
export const fetchChallenge = (id) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_CHALLENGE" });
    fetch(`${URL}/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch({
          type: "LOAD_CHALLENGE",
          challenge: response,
          faces: response,
        });
      });
  };
};
export const createAnswer = (answer, game_username) => {
    return(dispatch) => {
        dispatch({ type: "SENDING_ANSWER"});
    fetch(`http://localhost:3000/games/${game_username}/challenge_answers`,
    {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({challenge_answer: answer})
        })
         .then(response => {
             return response.json()
            }).then(({game, ...challenge_answer}) => {   
                console.log(game)
                console.log(challenge_answer)
        dispatch({ type: "SEND_ANSWER", challenge_answer, game})
        dispatch({ type: "UPDATE_CHALLENGE", game })
    
       window.location.assign(`/games/${game_username}/challenges/${game.current_challenge_id}`)
       if (game.current_challenge_id >= 5){
       
       dispatch({ type: 'DISPLAY_LEVEL_PAGE', game })
        window.location.assign(`/games/${game_username}`)
       }
        })
    }

}

