import React from "react";
import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
      <header>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Accueil</Link>
                  </li>
                  <li>
                      <Link to="/signIn">Se connecter</Link>
                  </li>
                  <li>
                      <Link to="/signUp">Inscription</Link>
                  </li>
              </ul>
          </nav>
      </header>
    );
};

export default Header;
