import React from "react";
import Home from "./Home";
import Eat from "./EatChocolate";
import SoftDrink from "./SoftDrink";
import MilkDrink from "./MilkDrink";
import NavBar from "./NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar>
        <Routes>
            <Route exact="true" path="/">
              <Home />
            </Route>  
            <Route exact="true" path="/softDrink">
              <SoftDrink />
            </Route>
            <Route exact="true" path="/chocolate">
              <Eat />
            </Route>
            <Route exact="true" path="/milk">
              <MilkDrink />
            </Route>
        </Routes>
      </NavBar>  
      </BrowserRouter>
    </div>
  );
}

export default App;
