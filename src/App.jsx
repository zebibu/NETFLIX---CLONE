import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Router>
      {/* Header is always visible */}
      <Header />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        {/* Optional: You can add /kids, /account, /notifications routes */}
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;
