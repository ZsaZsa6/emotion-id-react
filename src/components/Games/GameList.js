import React from 'react'


function GameList(props) {
   
    return(
       

            <div>
                <ul>
                    <li>
                        {games.map(game => <button onClick={this.props.startGame}> `${game.username}`</button>)}
                    </li>

                </ul>


            </div>
    )
        
    }

export default GameList