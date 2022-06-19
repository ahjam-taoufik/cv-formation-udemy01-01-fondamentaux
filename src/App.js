import logo from './logo.svg';
import './App.css';


const ReactHello = (props) => {
  return (
    <>
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn {props.title}
      </a>
    </>
  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ReactHello link="https://reactjs.org" title='React' logo={logo}  />
      </header>
    </div>
  );
}

export default App;
