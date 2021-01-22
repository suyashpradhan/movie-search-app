import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <h1 className="header">Moviez App</h1>
          <a
            href="https://github.com/suyashpradhan/movie-app"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github icon"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
