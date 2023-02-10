import React, { useState, useEffect } from "react";
import { map } from "rxjs/operators";
import { requests } from "../../../utils/http";
import useObservable from "../../../utils/useObservable";
import "./Row.css";

function Row(props) {
  const { title, fetchType, isLargeRow = false } = props;
  const [movies, setMovies] = useState([]);

  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    console.log(Object.keys(requests), fetchType, requests[fetchType]);
    const sub = useObservable(
      requests[fetchType].pipe(map(({ response }) => response.results)),
      setMovies
    );

    return () => sub.unsubscribe();
  }, []);
  return (
    <div className="row">
      <h2>{title || "No Row Title"}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${imgBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
