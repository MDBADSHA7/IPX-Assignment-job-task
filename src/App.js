import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import Section5 from './Section/Section5';
import Section6 from './Section/Section6';

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
      <Section6></Section6>
      <Footer></Footer>
    </div>
  );
}

export default App;
