// const URL = 'http://localhost:8000'

export const fetchGames = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_GAMES" });
    fetch("http://localhost:3000/games").then(response => {
      return response.json()
    }).then(response => {
      dispatch({ type: 'LOAD_GAMES', games: response })
    })
  }
}
