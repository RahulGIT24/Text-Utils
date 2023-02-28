import './App2.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toogleBtn = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      saveAlert("success", "Dark Mode enabled")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
      saveAlert("success", "Light Mode enabled")
    }
  }

  const saveAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Navbar title="Text-Utils" mode={mode} toogleBtn={toogleBtn} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse" mode={mode} saveAlert={saveAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;