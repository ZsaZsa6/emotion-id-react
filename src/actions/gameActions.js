const URL = 'http://localhost:8000'

export const fetchGames = () => {
    debugger
    return() => {
fetch(URL + '/games')
.then(resp => resp.json())
.then(data => ({ type: 'LOAD_GAMES', games: data }))
}
}