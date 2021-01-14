import React from "react";
import JokeComponent from "./JokeComponent";
import JokesData from "./JokesData";
import "../style.css";

function RandomJokes() {
  const jokeComponents = JokesData.map((joke) => (
    <JokeComponent
      key={joke.id}
      question={joke.question}
      punchLine={joke.punchLine}
    />
  ));

  console.log(jokeComponents);

  return <div>{jokeComponents}</div>;
}

export default RandomJokes;
