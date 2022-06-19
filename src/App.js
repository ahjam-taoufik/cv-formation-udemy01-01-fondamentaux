import './App.css';


const Button=(props)=>{
  return (
    <button style={{color:props.colorText, background:props.colorback}} >{props.children}</button>
  )
}

const ListButton=(props)=>{
    const {data}=props
    console.log(data);
   
  return (
      <>
         {data.map((d,index)=>{
          return  <Button key={index} colorText={d.text} colorback={d.back} >click me</Button>
         })}
      
      </>
  )
  
 

}



function App() {
  return (
    <div className="App">
      <header className="App-header">
         <ListButton  data={[{text:'red',back:'black'},{text:'pink',back:'white'},{text:'pink',back:'white'}]}   />
      </header>
    </div>
  );
}

export default App;
