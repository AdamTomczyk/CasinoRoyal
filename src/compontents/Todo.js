import React from "react";

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    const todos = [this.props]

    const listTodos = todos.map(el => <li>{el.task} - {el.done ? 'Done' : 'Not done'}</li>)

    return(
    <div>
      <ul>
          {listTodos}
      </ul>
    </div>
    )
  }
}


export default Todo;
