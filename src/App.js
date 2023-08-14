import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Reserve from "./components/Reserve/Reserve";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Reserve />
      <Footer />
    </div>
  );
}

export default App;
