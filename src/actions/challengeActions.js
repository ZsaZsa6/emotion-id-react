let URL = "http://localhost:3000/challenges"
export const fetchChallenge = (id) => {
    return(dispatch) => {
        dispatch({ type: "LOADING_CHALLENGE" });
        fetch(`${URL}/${id}`).then(response => {
            return response.json()
        }).then(response => {
            dispatch({ type: "LOAD_CHALLENGE", challenge: response});
        })
    }
}