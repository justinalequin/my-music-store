import React from "react";
import HomePage from "./Components/Pages/HomePage";
import CartPage from "./Components/Pages/CartPage";
import Profile from "./Components/Pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
