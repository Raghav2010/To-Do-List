import React,{ Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'TO-DO-LIST',
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
  toogletodo =({target}, index) => {
    const {checked} = target;
    const todos = [...this.state.todos];
    todos[index] = {...todos[index],
    done : checked
    }
    console.log(todos);
    this.setState({
      todos
    })
  }
  removeTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    })
  }

  alldone = () => {
    const todos = this.state.todos.map(todo => {
      return ({
        title: todo.title,
        done: true
      })
    })
    this.setState({
      todos
    })
  }

  formSubmitted = (event) => {
      event.preventDefault()
      this.setState({
        newTodo: '',
        todos: [...this.state.todos,{
          title : this.state.newTodo,
          done : false
        }]   
    });
  }

  render() {
    const { newTodo} = this.state;
    const input = newTodo;
    return (
      <div>
        <nav className="container-fluid navbar navbar-light bg-dark">
            <span className="navbar-brand mb-0 h1">{this.state.message}</span> 
        </nav>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New ToDo</label>
          <input onChange={(event) => this.newTodochange(event)} id="newTodo" name="newTodo" value={input}/>
          <button type="submit">Add</button>
        </form>
        <button onClick={() => this.alldone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (<li key={todo.title}>
              <input type="checkbox" className="checkbox" onChange={(event) => this.toogletodo(event,index)} checked={todo.done}/>
              <span className={todo.done ? 'done' : ''}>{todo.title}</span>
              <button onClick ={() => this.removeTodo(index)}>Remove</button>
              </li>
              )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
