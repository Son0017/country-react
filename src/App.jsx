import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-[10px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<SingleCountry />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
