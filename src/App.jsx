import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./globals.css";
import Search from "./pages/Search";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
