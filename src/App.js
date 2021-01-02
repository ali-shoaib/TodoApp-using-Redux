import logo from './logo.svg';
import './App.css';
import redux from './redux-svg/redux.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={redux} className="redux-logo" alt="redux-logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React and Redux App
        </p>
      </header>
    </div>
  );
}

export default App;
