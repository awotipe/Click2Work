import "./App.css";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../src/Components/Header/Header";
import Router from "../src/Router";
import Footer from "../src/Components/Footer/Footer";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Router />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
