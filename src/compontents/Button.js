import React from "react";

class Button extends React.Component{
  state = {
    num: 0
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     num: 0
  //   }
  //   this.increment = this.increment.bind(this);
  // }

  increment = (e) => {
    if(this.state.num < 20) {
    this.setState({
      num: this.state.num += this.props.incrementor
    })
    } else {
      this.setState({
        num: 0
      })
    }
  }

  render(){



    return(
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }

}

export default Button;
