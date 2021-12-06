import React from "react";

class IconList extends React.Component{
  static defaultProps = {
    options:[
      "angry",
      "anchor",
      "at",
      "archive",
      "baby",
      "bell",
      "bone",
      "car",
      "city",
      "cloud",
      "couch",
    ]
  }


  constructor(props){
    super(props)
    this.state =  {
        icons: ['cloud', "bone"]
    }
    this.addIcon = this.addIcon.bind(this)
  }


addIcon(){
  let randomIcon = this.props.options[Math.floor(Math.random()*this.props.options.length)]
  this.setState({icons: [...this.state.icons, randomIcon]})
}

  render(){
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return(
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add icon</button>
      </div>
    )
  }
}

export default IconList;
