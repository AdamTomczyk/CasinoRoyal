import React from "react";
import Example from "./Example";
class Rando extends React.Component{
  state = {
    num: 0
  }

  randomNumber = (e) => {
    let rando = Math.floor(Math.random()*this.props.maxNum) +1;
    this.setState({
      num: rando
      })
  }


  render(){
    return(
      <div>
        <h1>Number is {this.state.num}</h1>
        {this.state.num === 7 ? <h2>You win !!</h2> : <h2>You loose buddy 🥸</h2>}
        <button onClick={this.randomNumber}>Random Number</button>
        <Example test={this.state.num} />
      </div>
    )
  }
}

export default Rando
