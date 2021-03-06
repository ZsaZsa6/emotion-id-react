let URL = "http://localhost:3000/games";
export const fetchGames = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_GAMES" });
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch({ type: "LOAD_GAMES", games: response });
      });
  };
};

export const fetchGame = (username) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_GAME" });
    fetch(URL + `/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch({ type: "LOAD_GAME", game: response });
      });
  };
};
