
// import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './components/TextForm';

function App() {

  return (
    <>
    <Navbar title="Blog" about="About" />
    <div className="container">
      <TextForm heading="Text Converter" />
    </div>
    </>
  )
}

export default App
