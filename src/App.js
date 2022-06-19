import './App.css';

const lib = [
  {
    React: {
      href: 'https://reactjs.org',
      name: 'React',
    },
  },
];

const Component = (props) => {
  return (
    <a
      className="App-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn {props.name}
    </a>
  );
};

function App() {
  console.log(lib[0].React.name);
  return (
    <div className="App">
      <header className="App-header">
        <Component  name={lib[0].React.name} href={lib[0].React.href} />
      </header>
    </div>
  );
}

export default App;
