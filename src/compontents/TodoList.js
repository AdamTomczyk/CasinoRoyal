import React from "react";
import Todo from './Todo';

class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {task: "Do the dishes", done: true, id: 1},
        {task: "Vacum the floor", done:false, id:2}
      ]
    }
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.todos.map(t => <Todo {...t} />)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
