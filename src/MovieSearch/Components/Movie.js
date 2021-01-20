import React from "react";

function Movie(props) {
  return (
    <div className="card">
      <div className="left-card">
        <img
          src={`https://image.tmdb.org/t/p/original/${props.renderedData.poster_path}`}
          alt={props.renderedData.title}
          className="poster"
        ></img>
      </div>
      <div className="right-card">
        <div className="right-card-inner">
          <h1 className="title">{props.renderedData.original_title}</h1>
          <span className="vote">
            <i className="fas fa-star fa-fw fa-1x star-icon"></i>
            {props.renderedData.vote_average}
          </span>
          <span className="lang">{props.renderedData.original_language}</span>
        </div>
        <h2 className="release-date">{props.renderedData.release_date}</h2>
        <p className="overview">{props.renderedData.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
