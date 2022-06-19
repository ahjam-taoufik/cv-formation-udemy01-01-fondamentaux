import { useState } from 'react';
import './App.css';

const libs = [
  { name: 'React', href: 'https://reactjs.org' },
  { name: 'Angular', href: 'https://angular.io' },
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

const Iterator = (props) => {
  const list = props.values.map((val) => {
    return <Component key={val.name} name={val.name} href={val.href} />;
  });
  return list;
};

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.HandleSubmit}>
        <input
          placeholder={` add ${props.placeholder[0]}`}
          name={`${props.name[0]}`}
          onChange={props.HandleChange}
        />
        <input
          placeholder={` add ${props.placeholder[1]}`}
          name={`${props.name[1]}`}
          onChange={props.HandleChange}
        />
        <button>{props.button}</button>
      </form>
    </>
  );
};

function App() {
  const [values, setValues] = useState(libs);
  const [value, setValue] = useState(null);
  const HandleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setValues([...values, value]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Iterator values={values} />

        <Form
          HandleSubmit={HandleSubmit}
          HandleChange={HandleChange}
          placeholder={['name', 'link']}
          name={['name', 'href']}
          button={'add link'}
        />
      </header>
    </div>
  );
}

export default App;
