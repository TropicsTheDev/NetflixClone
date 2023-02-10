import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import './HomeScreen.css'

function HomeScreen(props) {
  return (
    <div>
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchType="fetchTrends$" isLargeRow/>
      <Row title="Top Rated" fetchType="fetchTopRated$" />
      <Row title="Action Movies" fetchType="fetchActionMovies$" />
      <Row title="Comedy Movies" fetchType="fetchComedyMovies$" />
      <Row title="Horror Movies" fetchType="fetchHorrorMovies$" />
      <Row title="Romance Movies" fetchType="fetchRomanceMovies$" />
      <Row title="Documentaries" fetchType="fetchDocumentaries$" />
    </div>
  );
}

export default HomeScreen;
