import React from 'react';
import PropTypes from 'prop-types';
import './newToDoForm.css';
/**
 * @param  {} props
 * @param  {'2%'}}onSubmit={props.formSubmitted}className="container"><labelhtmlFor="newTodo"></label><inputonChange={props.newTodochange}id="newTodo"name="newTodo"value={props.newTodo}placeholder="AddATitle..."/><buttontype="submit"id="button"disabled={!props.newTodo}>Add</button></form>} =>{return(<formstyle={{marginTop
 */
const NewToDoForm = (props) => {
    return (
        <form style={{marginTop : '2%'}} onSubmit={props.formSubmitted} className="container">
          <label htmlFor="newTodo"></label>
          <input onChange={props.newTodochange} id="newTodo" name="newTodo" value={props.newTodo} placeholder="Add A Title..." />
          <button type="submit" id="button" disabled={!props.newTodo}>Add</button>
        </form>
    )
}
NewToDoForm.propTypes = {
    formSubmitted : PropTypes.func,
    newTodochange : PropTypes.func,
    value : PropTypes.string,
    disabled : PropTypes.string
}
export default NewToDoForm;