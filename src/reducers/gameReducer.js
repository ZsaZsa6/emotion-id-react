export default function gameReducer(state = [], action) {
    switch (action.type) {
      case 'LOAD_GAMES':
        
        return action.games.map(game => game.username)

        default:
            return state
    
    }
}
