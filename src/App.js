import React,{ Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewToDoForm from './components/newToDOForm/newToDoForm';
import ToDoList from './components/ToDoList';
/**
 * @param  {} {super(
 * @param  {'TO-DO-LIST'} ;this.state={message
 * @param  {''} newTodo
 * @param  {[]};}newTodochange=({target}} todos
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'TO-DO-LIST',
      newTodo: '',
      todos: []    
    };
  }
  /**
   * @param  {} {target}
   * @param  {} =>{const{value}=target;constnewTodo=value.trimLeft(
   * @param  {newTodo}} ;this.setState({newTodo
   */
  newTodochange = ({target}) => {
    const { value } = target;
     const newTodo = value.trimLeft();
    this.setState({
        newTodo : newTodo
    });
  }
  /**
   * @param  {} {target}
   * @param  {} index
   * @param  {} =>{const{checked}=target;consttodos=[...this.state.todos];todos[index]={...todos[index]
   * @param  {checked}this.setState({todos}} done
   */
  toogletodo =({target}, index) => {
    const {checked} = target;
    const todos = [...this.state.todos];
    todos[index] = {...todos[index],
    done : checked
    }
    this.setState({
      todos
    })
  }
  
  /**
   * @param  {} index
   * @param  {} =>{consttodos=[...this.state.todos];todos.splice(index
   * @param  {} 1
   * @param  {} ;this.setState({todos}
   */
  removeTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    })
  }
  /**
   * @param  {todo.title} =>{consttodos=this.state.todos.map(todo=>{return({title
   * @param  {true}} done
   */
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
  /**
   * @param  {} event
   * @param  {} =>{event.preventDefault(
   * @param  {''} this.setState({newTodo
   * @param  {[...this.state.todos} todos
   * @param  {this.state.newTodo} {title
   * @param  {false}]}} done
   */
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
  /**
   * @param  {'white'}}>{this.state.message}</span></nav><divclassName="borderborder-primaryinputdiv"><NewToDoFormnewTodo={this.state.newTodo}newTodochange={this.newTodochange}formSubmitted={this.formSubmitted}/><hr/><ToDoListtodos={this.state.todos}toogletodo={this.toogletodo}removeTodo={this.removeTodo}/></div><buttonclassName="alldone"onClick={(} {return(<div><navclassName="navbarnavbar-lightbg-dark"><spanclassName="navbar-brand"style={{color
   */
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand" style={{color:'white'}}>{this.state.message}</span> 
        </nav>
        <div className="border border-primary inputdiv" >
        <NewToDoForm 
        newTodo={this.state.newTodo}
        newTodochange ={this.newTodochange}
        formSubmitted={this.formSubmitted} />
        <hr />
        
        <ToDoList 
        todos = {this.state.todos}
        toogletodo = {this.toogletodo}
        removeTodo = {this.removeTodo}
        /> 
        
      </div>
      <button className="alldone" onClick={() => this.alldone()}>All Done</button>
      </div>
    );
  }
}

export default App;
