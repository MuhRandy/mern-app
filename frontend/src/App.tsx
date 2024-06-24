import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen min-w-[100dvw] bg-[#f1f1f1]">
      <BrowserRouter>
        <Navbar />

        <div className="max-w-[1400px] p-5 m-[0_auto]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
