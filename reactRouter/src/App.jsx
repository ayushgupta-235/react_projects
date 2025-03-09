import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Home from "./componets/Home/Home";

function App() {
  return (
    <>
    <Header/>
    <Footer/>
    <Home/>
    </>
  );
}

export default App;
