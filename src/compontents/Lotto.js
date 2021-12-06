import React from "react";
import Ball from './Ball';

class Lotto extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        nums:[]
    }
    this.generateNumbers = this.generateNumbers.bind(this)
  }

  generateNumbers(amount){
    const numbers = []

    for (let i = 0; i < amount; i++) {
      let num = Math.floor(Math.random() * 40) + 1
      numbers.push(num);
    }

    const sortedNumbers = [...numbers].sort((a, b) => a - b)
    const checkedNumbers = [];

    for (let i = 0; i < sortedNumbers.length; i++) {
      if (sortedNumbers[i] === sortedNumbers[i + 1]) {
        checkedNumbers.push(sortedNumbers[i + 1] + 1)
      } else {
        checkedNumbers.push(sortedNumbers[i])
      }
    }

    const reSort = [...checkedNumbers].sort((a, b) => a - b)

    this.setState({
      nums: reSort
    })

  }

  render(){
    console.log(this.state.nums)
    return(
      <div className="Lotto">
        <h1>LOTTO</h1>
        <ul style={{textAlign:"left"}}>
          <li>XX - A Kiss on the forehead 😙</li>
          <li>XXX - Cleaning the Dishwasher for the week 🧼</li>
          <li>XXXX - A day trip to the Forest 🦌</li>
          <li>XXXXX - One Week no Boobie Walk 🦮</li>
          <li>XXXXXX - New new Balance Shoes 👟</li>
        </ul>
        <Ball nums={this.state.nums} />
        <button onClick={() => this.generateNumbers(6)}>Generate</button>
      </div>
    )
  }
}

export default Lotto;
