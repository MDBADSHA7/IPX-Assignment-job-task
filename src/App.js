import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Section1></Section1>
      <Section2></Section2>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
