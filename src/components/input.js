import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addTodo, delAll} from '../actions';
import TodoList from './list';
import '../App.css';
import {useSpring, animated} from 'react-spring'

const TodoInput = (props) => {
    const heading= 
    {
    margin: '20px auto',
    fontFamily: 'Indie Flower, cursive', 
    fontSize: '50px',
    color: 'white',
    backgroundColor: 'black',
    width: '300px'
    }

    const [state, setState] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = (e) => {
      e.preventDefault();
      if(state === ''){
        setError(true);
      }
      else{
        props.dispatch(addTodo(state));
        setState('');
        setError(false);
      }
    }
    const onDelAll = () => {
      props.dispatch(delAll());
    }

    const p = useSpring({
      to: {opacity: 1, marginTop: 0},
      from: {opacity: 0, marginTop: -500}
    })

  return (
    <animated.div style={p} className="container input">
      <h3 style={heading}>Todo List App</h3>
      <div className="form-group">  
      <input type="text" className="form-control" value={state} onChange={e => setState(e.target.value)}/>
      {error && <span style={{color: 'red', backgroundColor:'black', fontSize: '20px'}}>Enter some todo.</span>}
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>Add item</button>{' '}
      <button className="btn btn-danger" onClick={onDelAll}>Delete All</button>
      <TodoList />
    </animated.div>
  )
}

export default connect()(TodoInput);
