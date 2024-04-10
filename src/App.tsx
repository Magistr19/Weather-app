import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
