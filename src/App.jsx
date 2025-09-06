import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Search from "./pages/Search/Search";

// New pages
import TVShows from "./pages/TVShows/TVShows";
import Movies from "./pages/Movies/Movies";
import NewPopular from "./pages/NewPopular/NewPopular";
import MyList from "./pages/MyList/MyList";
import BrowseLanguages from "./pages/Languages/ BrowseLanguages";

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

        {/* Added pages */}
        <Route path="/tv" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/new" element={<NewPopular />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/languages" element={<BrowseLanguages />} />

        {/* Optional: kids, account, notifications pages can be added similarly */}
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;
