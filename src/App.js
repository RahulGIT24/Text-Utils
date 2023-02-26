import './App2.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name = "Rahul";
function App() {
  return (
    <>
      <Navbar title="Text-Utils" />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse" />
      </div>
    </>
  );
}

export default App;