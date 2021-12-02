import React from "react";

class Game extends React.Component{

 constructor(props){
  super(props)
  this.state={
    score:105,
    gameOver: false,
  }
 }


  render(){
    return(
    <div>
      <h1>Your Score is: {this.state.score}</h1>
    </div>
    )
  }
}

export default Game;
