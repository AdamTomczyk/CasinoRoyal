import React from "react";

class Example extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

render(){
  return(
    <div>
      <h1>{this.props.test}</h1>
    </div>
    )
  }
}

export default Example;
