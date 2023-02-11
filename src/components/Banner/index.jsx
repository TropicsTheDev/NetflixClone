import React, { useState, useEffect } from "react";
import { map } from "rxjs/operators";
import { requests } from "../../../src/utils/http";
import useObservable from "../../../src/utils/useObservable";

import "./Banner.css";

function Banner(props) {
  const [movie, setMovie] = useState({});

  function truncate(string, numberOfCharacters) {
    return string?.length > numberOfCharacters
      ? string.substr(0, numberOfCharacters - 1) + "..."
      : string;
  }

  useEffect(() => {
    const sub = useObservable(
      requests.fetchNetflixOriginals$.pipe(
        map(
          ({ response }) =>
            response.results[
              Math.floor(Math.random() * response.results.length - 1)
            ]
        )
      ),
      setMovie
    );
    return () => sub.unsubscribe();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
