import React from "react";

class Ball extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    console.log(this.props.nums[0])
    return(
    <div className="Ball">
      {this.props.nums.map(el =>

      <h1 style={{padding: "40px", margin:"20px", backgroundColor: "red", borderRadius: "50%",  width: "100%", height: "100%"}}>{el}</h1>

      )}
    </div>
    )
  }
}

export default Ball;
