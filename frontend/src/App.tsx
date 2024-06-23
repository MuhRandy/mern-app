import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-[#f1f1f1]">
      <BrowserRouter>
        <Navbar />

        <div className="max-w-[1400px] px-20 py-5 mx-0 my-auto">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
