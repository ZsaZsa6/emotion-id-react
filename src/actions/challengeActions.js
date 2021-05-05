let URL = "http://localhost:3000/challenges"
export const fetchChallenge = () => {
    return(dispatch) => {
        dispatch({ type: "LOADING_CHALLENGE" });
        fetch(`${URL}/1`).then(response => {
            return response.json()
        }).then(response => {
            dispatch({ type: "LOAD_CHALLENGE", challenge: response});
        })
    }
}