import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import Section5 from './Section/Section5';

function App() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Home></Home>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
