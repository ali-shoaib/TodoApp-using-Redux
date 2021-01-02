import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const Counter = (props) => {
    const increment = () => {
        props.dispatch({ type: 'INCREMENT' });
    }

    const decrement = () => {
        props.dispatch({ type: 'DECREMENT' });
    }
      
    const reset = () => {
        props.dispatch({ type: 'RESET' });
    }   
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{props.count}</h2>
      <button className='btn btn-success' onClick={increment}>Increment by 1</button>{' '}
      <button className='btn btn-warning' onClick={decrement}>Decrement by 1</button><br/>     
      <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div>
  )
}

function sheet(state) {
    return {
      count: state.count
    };
  }

export default connect(sheet)(Counter);
