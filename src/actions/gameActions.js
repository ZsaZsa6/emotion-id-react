// const URL = 'http://localhost:8000'

export const fetchGames = () => {
    return(dispatch) => {
        fetch("http://localhost:8000/games", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'LOAD_GAMES', games: data }))
        debugger
}
}