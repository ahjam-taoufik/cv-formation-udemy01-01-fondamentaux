
import './App.css';

const Clock=()=>{
  const date=new Date()
  return(
    <p> {`${date}`}</p>
  )
}



function App() {


  return (
    <div className="App">
      <header className="App-header">
          <Clock/>
      </header>
    </div>
  );
}

export default App;
