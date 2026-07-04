import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";

import SeasonalAnalysis from "./pages/SeasonalAnalysis";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MarketComparison from "./pages/MarketComparison";
import CropRecommendation from "./pages/CropRecommendation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/market-comparison" element={<MarketComparison />}/>
        <Route path="/crop-recommendation" element={<CropRecommendation />}/>
        <Route path="/season" element={<SeasonalAnalysis />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
