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
export const createAnswer = (answer) => {
    return(dispatch) => {
        dispatch({ type: "SENDING_ANSWER"});
    fetch("http://localhost:3000/challenge_answers", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            
          },
          body: "answer"
        })
         .then(response => {
             return response.json()
            }).then(response => {   
        dispatch({ type: "SEND_ANSWER", challenge_answer: response})
        })
    }

}