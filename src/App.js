import './App2.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

// import About from './components/About'
let name = "Rahul";
function App() {
  const [mode, setMode] = useState('light');
  const toogleBtn = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
    }
  }
  return (
    <>
      <Navbar title="Text-Utils" mode = {mode} toogleBtn = {toogleBtn}/>
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse" mode = {mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;