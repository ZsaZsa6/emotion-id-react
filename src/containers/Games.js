
import GameList from '../components/Games/GameList';
import React, { Component} from 'react';

class Games extends Component {
constructor(){
super()
    state = {
        games: 'Hello'
    }
}

fetchGames = () => {
fetch('http://localhost:3000/games')
.then(response => response.json())
.then(result => {
    this.setState({games: result})
})
}
}



export default Games