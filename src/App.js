import React from "react";
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/search" element={<SearchPage />} /> {/* The path directs to the SearchPage element */}
            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
