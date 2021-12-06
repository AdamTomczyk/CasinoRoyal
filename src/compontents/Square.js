import React from "react";
import './Square.css'

class Square extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      color: this.props.color
    }
    this.handleClick = this.handleClick.bind(this)
  }

  newRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color
  }

  handleClick(){
    this.setState({
      color: this.newRandomColor()
    })
  }




  render(){
    return(
      <div onClick={this.handleClick}  style={{ backgroundColor: this.state.color}} className="Square">

      </div>
    )
  }
}

export default Square;
