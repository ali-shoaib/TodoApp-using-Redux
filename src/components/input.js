import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import {addTodo, delAll} from '../actions';
import TodoList from './list';
import '../App.css';

const TodoInput = (props) => {
    const heading= 
    {
    margin: '40px 0',
    textAlign:'center', 
    fontFamily: 'Satisfy, cursive', 
    fontSize: '40px',
    textShadow: '3px 1px 1px pink'
    }

    const [state, setState] = useState('');

    const onSubmit = (e) => {
      e.preventDefault();
      if(state !== ''){
        props.dispatch(addTodo(state));
      }
      setState('');
    }

    const onDelAll = () => {
      props.dispatch(delAll());
      setState('');
    }

  return (
    <div className="container input">
      <h3 style={heading}>Todo List App</h3>
      <div className="form-group">  
      <input type="text" className="form-control" value={state} onChange={e => setState(e.target.value)}/>
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>Add item</button>{' '}
      <button className="btn btn-danger" onClick={onDelAll}>Delete All</button>
      <TodoList />
    </div>
  )
}

export default connect()(TodoInput);
