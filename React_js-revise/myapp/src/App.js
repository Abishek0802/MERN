import "./App.css";
import Dark from "./Dark-Mode/Dark";

import Header from "./Home/Header";
import Product_List from "./Home/Product_List";
import Result from "./Trans-input-field/Result";
import Maping from "./API-loop/Maping";
import FakeAPI from "./API-loop/FakeAPI";
import ComponentOutput from "./Trans-data-field-API/ComponentOutput";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Dark-Mode/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dark />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <Product_List />
      <Result />
      <Maping />
      <FakeAPI />
      <ComponentOutput /> */}
    </>
  );
}

export default App;
