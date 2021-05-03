import GameShow from ".../components/GameShow"
import { connect } from "react-redux";
import { fetchGame } from "../actions/gameActions.js"
import React, { Component } from "react"

class Game extends Component {
    componentDidMount() {
        this.props.fetchGame(`{id}`)
    }
    handleLoading = () => {
        console.log(this.props.loading)
        if (this.props.loading) {
            return <div>Loading...</div>

        } else {
            return <GameShow game={this.props.game} />
        }
    }
    render() {
        return (
            <div>
                {this.handleLoading()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        game: state.games.game,
        loading: state.game.loading,
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchGame: () => dispatch(fetchGame()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Game)