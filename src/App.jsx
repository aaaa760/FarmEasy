import React from "react"
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Detect from "./pages/Detect";
import Share from "./pages/Share";
import Profile from "./pages/Profile";
import Lend from "./pages/Lend";
import Tool from "./pages/Tool";
import { LoginProvider } from "./contexts/LoginContext";
import MyTools from "./pages/MyTools";


function App() {
  return (
    <LoginProvider>
    <BrowserRouter>
        <Routes>
          <Route exact path="login" element={<Login />} />
          <Route element={<NavBar/>}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="detect" element={<Detect />} />
          <Route exact path="share" element={<Share />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="lend" element={<Lend />} />
          <Route exact path="tool/:id" element={<Tool />} />
          <Route exact path="mytools" element={<MyTools />} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;