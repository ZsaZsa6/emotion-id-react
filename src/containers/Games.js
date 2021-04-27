
import GameList from '../components/GameList';
import { connect } from 'react-redux';
import { fetchGames } from '../actions/gameActions.js';
import React, { Component } from 'react';

class Games extends Component {

    state = {
        games: [] 
    }
    componentDidMount() {
        debugger
        this.props.fetchGames(this.props.fetchGames)
    }

    render() {
        return (
            <GameList />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games

    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchGames: () => dispatch(fetchGames())
})


export default connect(mapStateToProps, mapDispatchToProps)(Games);