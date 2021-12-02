import React from "react";
import Die from "./Die";

class RollDice extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          stringValOne: '',
          numericValOne: 0,
          stringValTwo: '',
          numericValTwo: 0,
          newClass: 'shaking',
          rolling: false,
    }
    this.rollOne = this.rollOne.bind(this)
    this.rollTwo = this.rollTwo.bind(this)

  }



  rollOne() {
    let rando = Math.floor(Math.random()*6) +1;
    let randoToString =''

    switch (rando) {
      case 1:
        randoToString = 'one';
        break;
      case 2:
        randoToString = 'two';
        break;
      case 3:
        randoToString = 'three';
        break;
      case 4:
        randoToString = 'four';
        break;
      case 5:
          randoToString = 'five';
          break;
        case 6:
          randoToString = 'six';
          break;
      default:
        break;
    }

    this.setState({
      stringValOne: randoToString,
      numericValOne: rando
    })

  }

  rollTwo() {
    let rando = Math.floor(Math.random() * 6) + 1;
    let randoToString = ''

    switch (rando) {
      case 1:
        randoToString = 'one';
        break;
      case 2:
        randoToString = 'two';
        break;
      case 3:
        randoToString = 'three';
        break;
      case 4:
        randoToString = 'four';
        break;
      case 5:
        randoToString = 'five';
        break;
      case 6:
        randoToString = 'six';
        break;
      default:
        break;
    }

    this.setState({
      stringValTwo: randoToString,
      numericValTwo: rando,
      rolling: true
    })

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }




  render(){

    console.log(this.state.numericValOne)

    return(
      <div className="RollDice">
        <Die generatedClass={this.state.stringValOne} generatedValue={this.state.numericValOne} classAdd={this.state.newClass} rolling={this.state.rolling} />
        <Die generatedClass={this.state.stringValTwo} generatedValue={this.state.numericValTwo} classAdd={this.state.newClass} rolling={this.state.rolling}/>
        <button onClick={(e) => { this.rollOne(); this.rollTwo()}} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    )
  }
}

export default RollDice;
