import './App.css';
// import Home from "./Pages/Home/Home";
import Router from "../src/Router";
import Navbar from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";




function App() {
  return (
    <div className="App">
      {/* <Home/> */}
        <Navbar/>
        <Router/>
        <Footer/>
    </div>
  );
}

export default App;