let URL = "http://localhost:3000/challenges"
export const fetchChallenge = (id) => {
    return (dispatch) => {
        dispatch({ type: "LOADING_CHALLENGE" });
        fetch(`${URL}/${id}`).then(response => {
            return response.json()
        }).then(response => {
            dispatch({ type: "LOAD_CHALLENGE", challenge: response, faces: response})
        })
    }
}
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
            }).then(response => {   
        dispatch({ type: "SEND_ANSWER", challenge_answer: response})
        })
    }

}
// export const showAnswer = (id, game_username) => {
//     return(dispatch) => {
//         fetch(`http://localhost:3000/games/${game_username}/challenge_answers/${id}`).then(response => {return response.json()
//     }).then(response => {
//         dispatch({ type: "SHOW_ANSWER", challenge_answer: response})
//     })
//     }
// }