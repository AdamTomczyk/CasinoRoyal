import React from "react";

class Die extends React.Component{
    state={
      zeClass: this.props.classAdd
    }



    render(){

      let wobble = ""

      if(this.props.rolling){
        wobble = "shaking"
      } else {
        wobble = ""
      }

      let classname = `fas fa-dice-${this.props.generatedClass} ${wobble}`

      console.log(this.state.zeClass)
      return(
        <div className="Die"><i className={classname}></i></div>
      )
    }
}

export default Die;
