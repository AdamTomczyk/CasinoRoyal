import React from "react";
import Square from "./Square";

class RandomColor extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      startColors: [],
      colorsGenerated: false,
    }

    this.generateColors = this.generateColors.bind(this);
  }

  randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color
  }



  generateColors(e){
    if(this.state.startColors.length < 18) {
    for(let i = 0; i < 18; i++){
      this.setState(curState => ({
        startColors: [...curState.startColors, this.randomColor()],
        colorsGenerated: true
        }))
      }
    } else {
      window.location.reload();
    }
  }





  render(){

    return(
    <div>
      <div className="RandomColor">
          {this.state.startColors.map((el,index) => <Square key={index} color={el} />)}
      </div>
        <button style={{marginTop: '20px'}} onClick={this.generateColors}>{this.state.colorsGenerated ? 'ReGnerate' : 'Generate'}</button>
    </div>
    )
  }
}

export default RandomColor;
