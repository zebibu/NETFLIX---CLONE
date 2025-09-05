import React from "react";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../api/requests";
// import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Banner at the top */}
      <Banner />

      {/* Movie Rows */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Home;
