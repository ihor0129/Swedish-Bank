import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from './logIn.js';
import Second from "./second.js"

function App() {
  return (
  <div className="App">
  <Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/second" element={<Second />} />
  </Routes>
  </Router>
  
  <img src='background-xl.jpg' style={{width: "100%", height: "auto", zIndex: "0"}} className="backImg" />
  </div>
  );
}

export default App;
