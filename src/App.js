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
    if (mode === 'light' || mode === 'danger' || mode === 'warning' || mode === 'primary') {
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

  //* Custom Themes
  const red = () => {
    setMode("danger");
    document.body.style.backgroundColor = '#dc3545';
    document.body.style.color = 'white'
    saveAlert("success", "Custom Themes enabled")
  }
  const blue = () => {
    setMode("primary");
    document.body.style.backgroundColor = '#0d6efd';
    document.body.style.color = 'white'
    saveAlert("success", "Custom Themes enabled")
  }
  const yellow = () => {
    setMode("primary");
    document.body.style.backgroundColor = '#ffc107';
    document.body.style.color = '#212529'
    saveAlert("success", "Custom Themes enabled")
    setMode("warning");
  }

  return (
    <>
      <Navbar title="Text-Utils" mode={mode} toogleBtn={toogleBtn} red={red} yellow={yellow} blue={blue} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse" mode={mode} saveAlert={saveAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;