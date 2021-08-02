import logo from './logo.svg';
import './App.css';
import Collection from './Components/Collections';
import Movie from './Components/Movies';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Collection>
        <Movie 
        title = "No Country for Old Men"
        description = "A movie about stuff"
        year = "2007"
        genre = "Thriller"
        />
      </Collection>
    </div>
  );
}

export default App;
