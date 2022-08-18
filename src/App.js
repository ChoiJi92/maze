import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
          <GlobalStyles />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
