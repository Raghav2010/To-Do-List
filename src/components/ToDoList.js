import React from 'react';
import "../../node_modules/font-awesome/css/font-awesome.min.css";
// import ToDoItem from './ToDOItem';
/**
 * @param  {} props
 * @param  {} =>{leti=1;return(<tableclassName="tabletable-stripedtable-darkcontainer"><thead><tr><thscope="col">S.No</th><thscope="col">Createdon</th><thscope="col">Status</th><thscope="col">To-Do</th><thscope="col">Remove</th></tr></thead>{props.todos.map((todo
 * @param  {} index
 * @param  {} =>{return(<tbody><tr><thscope="row">{i++}</th><td>{Date.now(
 * @param  {} }</td><td><inputtype="checkbox"className="checkbox"onChange={(event
 * @param  {} =>props.toogletodo(event
 * @param  {} index
 * @param  {''}>{todo.title}</span></td><td><buttononClick={(} }checked={todo.done}/></td><td><spankey={index}className={todo.done?'done'
 */
const ToDoList = (props) => {
  let i =1;
let today = new Date().toLocaleString();

    return (
      <table className="table table-striped table-dark container">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Created on</th>
                  <th scope="col">Status</th>
                  <th scope="col">To-Do</th>
                  <th scope="col">Remove</th>
                </tr>
               </thead>
        {props.todos.map((todo, index) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{i++}</th>
                <td>{today}</td>
                <td><input type="checkbox" className="checkbox" onChange={(event) => props.toogletodo(event,index)} checked={todo.done}/></td>
                <td><span key={index} className={todo.done ? 'done' : ''}>{todo.title}</span></td>
                <td><button onClick ={() => props.removeTodo(index)}><i className="fa fa-close"></i></button></td>
              </tr>
            </tbody>
            )
            })}
      </table> 
                   
    )
}
export default ToDoList;