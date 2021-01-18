import React from 'react'
import { connect } from 'react-redux'
import { delTodo } from '../actions'
import '../App.css';

const TodoList = (props) => {
    const onDelete = (id) => {
        props.dispatch(delTodo(id))
    }

  return (
      <div className="todos">
          {props.todos.map((todo, index) => (
              <li className="list" key={index}>
                {!props.todos ? <p>No todos here</p> : todo.name}
              <button className="btn btn-warning" onClick={() => onDelete(todo.id)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
              </li>
          ))}
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        todos: state.todos.items
    }
}

export default connect(mapStateToProps)(TodoList);
