import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>

    <div>
        {movies.map((movie) => (
          <div key={movie.title}>
            <p>Title: {movie.title}</p>
            <p>Time: {movie.time} minutes</p>
            <ul>
              <p>Genres:</p>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  </div>;
}

export default Movies;
