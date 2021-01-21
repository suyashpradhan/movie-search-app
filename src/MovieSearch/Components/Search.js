import React, { useState } from "react";
import Movie from "./Movie";
import Body from "./Body";

function Search() {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);

  let apiURL = `https://api.themoviedb.org/3/search/movie?api_key=20b3557e9e2b3e74919ce30cdada1468&language=en-US&query=${input}`;

  function submitHandler(e) {
    e.preventDefault();

    fetch(apiURL).then((response) => {
      response.json().then((value) => {
        setData(value.results);
      });
    });
    setInput("");
  }

  return (
    <div className="container">
      <section className="section">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              className="field"
              placeholder="Enter movie name..."
              name="movie"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <i className="fas fa-search search-icon"></i>
          </div>
          <button>Search</button>
        </form>
      </section>

      {data.length === 0 ? (
        <Body />
      ) : (
        data.map((item, index) => {
          return <Movie key={index} renderedData={item} />;
        })
      )}
    </div>
  );
}

export default Search;
