import React from "react";

class Score extends React.Component{
  constructor(props){
    super(props)
    this.state={
      num:0,
      todos: [
        { task: 'do the dishes', done: false, id: 1 },
        { task: 'vacuum the floor', done: true, id: 2 }
      ]
    }

    this.handleClick = this.handleClick.bind(this)
    this.trippleKill = this.trippleKill.bind(this)
    this.fiveKill = this.fiveKill.bind(this)
    this.sixKill = this.sixKill.bind(this)
    this.oneTwoKill = this.oneTwoKill.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
  }


  completeTodo(id) {
    id = 1;
    // Array.prototype.map returns a new array
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        // make a copy of the todo object with done -> true
        return { ...todo, done: true };
      }
      return todo;  // old todos can pass through
    });

    this.setState({
      todos: newTodos // setState to the new array
    });
  }

  handleClick(e){
    this.setState({
      num: this.state.num + 1
    })
  }

  trippleKill(input){
    this.setState((input) => ({
      num: input.num+4
    }))
  }

  fiveKill(state){
    this.setState((state) => ({
      num: state.num + 5
    }))
  }

  sixKill(inputState){
    this.setState((inputState) => ({
      num: inputState.num + 6
    }))

      this.setState((inputState) => ({
        num: inputState.num + 200
    }))
  }


  incrementScore(curState){
    return { num: curState.num + 40};
  }

  oneTwoKill(){
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }


  render(){
    console.log(this.state.todos)
    return(
      <div>
        <h1>Score: {this.state.num}</h1>
        <button onClick={this.handleClick}> Increment</button>
        <button onClick={this.trippleKill}> Tripple Kill</button>
        <button onClick={this.fiveKill}> Five Kill</button>
        <button onClick={this.sixKill}>Six Kill</button>
        <button onClick={this.oneTwoKill}>120 Kill</button>
        <button onClick={this.completeTodo}>Finish First Task</button>
      </div>
    )
  }
}

export default Score;
