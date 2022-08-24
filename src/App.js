import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Brand from "./pages/Brand";
import Highlight from "./pages/Highlight";
import Main from "./pages/Main";
import Test from "./components/Notice";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/highlight" element={<Highlight />} />
        <Route path="/brand" element={<Brand/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
