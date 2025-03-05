import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./globals.css";
import Search from "./pages/SearchPage";
import Home from "./pages/HomePage";

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
