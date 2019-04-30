import React,{ Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello',
      newTodo: '',
      todos: []    
    };
  }

  newTodochange = ({target}) => {
    const { value } = target;
    this.setState({
        newTodo : value
    });
  }

  formSubmitted = (event) => {
      event.preventDefault()
      this.setState({
        newTodo: '',
        todos: [...this.state.todos,{
          title : this.state.newTodo
        }]   
    });
  }

  // componentDidUpdate() {
  //   const { todos } = this.state;
  //   console.log(todos);
  // }

  render() {
    const { newTodo} = this.state;
    const input = newTodo;
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New ToDo</label>
          <input onChange={(event) => this.newTodochange(event)} id="newTodo" name="newTodo" value={input}/>
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>
          })}
        </ul>

      </div>
    );
  }
}

export default App;
