import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1> Actors Page </h1>
    <div>
    {actors.map((actors) => (
          <div key={actors.name}>
            <p>Name: {actors.name}</p>
            <ul>
              <p>Movies:</p>
              {actors.movies.map((actor) => (
                <li key={actor}>{actor}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    
  </div>;
}

export default Actors;
