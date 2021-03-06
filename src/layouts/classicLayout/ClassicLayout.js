import React from "react";
import { Link } from "react-router-dom";

import "./ClassicLayout.css";

function ClassicLayout({ children }) {
  return (
    <div className="app">
      <h2 className="title"> Le confinement dont vous êtes le héros</h2>

      {children}

      <div className="footer">
        <Link to="/" className="questionLink">
          <button className="button">Revenir à l'accueil</button>
        </Link>

        <a
          href="https://www.instagram.com/marinebaousson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>lien vers l'insta de Marine Bouasson</p>
        </a>
      </div>
    </div>
  );
}

export default ClassicLayout;
