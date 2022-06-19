import logoReact from './logo.svg';
import logoAngular from './angular.svg';
import './App.css';

const libraries={
  React:{
    title:'React',
    href:'http://reactjs.org',
    logo:logoReact
  },
  Angular:{
    title:'Angular',
    href:'http://angular.io',
    logo:logoAngular

  }
}


const Component = (props) => {
  return (
    <>
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn {props.title}
      </a>
    </>
  );
};


function App() {
   
console.log(libraries.React);
  return (
    <div className="App">
      <header className="App-header">
      <Component {...libraries.React} />
      <Component {...libraries.Angular} />
      </header>
    </div>
  );
}

export default App;
