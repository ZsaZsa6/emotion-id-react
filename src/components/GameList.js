import React from 'react'


function GameList() {
   
    return(
       

            <div>
                <ul>
                    <li>
                        {this.props.games.map(game => <button onClick={this.props.startGame}> `${game.username}`</button>)}
                    </li>

                </ul>


            </div>
    )
        
    }

export default GameList