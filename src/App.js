import logoReact from './logo.svg';
import logoAngular from './angular.svg';
import './App.css';


const Component = (props) => {
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
      <Component link="https://reactjs.org" title='React' logo={logoReact}  />
      <Component link="https://angular.io" title='Angular' logo={logoAngular}  />
      </header>
    </div>
  );
}

export default App;
