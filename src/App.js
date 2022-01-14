import logo from './logo.svg';
import './App.css';
import "wired-elements";
function App() {
  return (
    <div className="App">
      <wired-card elevation="5">
      <h1>wired-elements demo</h1>
    </wired-card>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
