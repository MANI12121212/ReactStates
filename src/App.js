 import './App.css';
 import { useState } from 'react';
 import Head from "./Head.jsx"
 

function App() {
  const [darkTheme, setDarkTheme] = useState({backgroundColor:"white" , color:"black"});
  return (
    <div className="App">
      <Head darkTheme = {darkTheme} setDarkTheme = {setDarkTheme} />
    
     
    </div>
  );
}

export default App;
