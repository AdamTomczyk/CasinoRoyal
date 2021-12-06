import React from "react";
import Coin from './Coin'

class Coinflip extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      flips: 0,
      coinFace: '',
      headCount: 0,
      tailCount:0,
    }

    this.flipCoin = this.flipCoin.bind(this)
  }

  flipCoin(){
    let odds = Math.floor(Math.random()*2) + 1;
    let face = ''
    let heads = 0;
    let tails = 0;


    switch (odds) {
      case 1:
        face = 'heads';
        heads += 1
        break;
      case 2:
        face = 'tails';
        tails += 1
        break;
      default:
        break;
    }

    this.setState((curState) => ({
      coinFace: face,
      flips: curState.flips + 1,
      headCount: curState.headCount + heads,
      tailCount: curState.tailCount + tails
    }))

  }

  render(){
    console.log(this.state)
    return(
      <div>
        <h1>Let Flip the Coin</h1>
        <Coin coinType={this.state.coinFace === 'heads' ? 'heads': 'tails'} />
        <button className="btn-hover color-3" onClick={this.flipCoin}>Toss the Coin</button>
        <h3>Out of {this.state.flips} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails. </h3>
      </div>
    )
  }
}

export default Coinflip;
