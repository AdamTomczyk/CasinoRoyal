import React from "react";

class Demo extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        dog: this.props.dog
      }
  }

  render(){
    return(
    <div>
      {this.state.dog}
    </div>
    )
  }
}

export default Demo
