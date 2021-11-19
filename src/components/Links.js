import React from 'react';
import { Link } from 'react-router-dom';

const LinkPage = () => (
  <>
    <nav className="navigation-bar">
      <h1 className="main-heading">Bookstore CMS</h1>
      <ul className="thelinks">
        <li className="ho">
          <Link to="/" exact> BOOKS </Link>
        </li>
        <li className="ca">
          <Link to="/categories"> CATEGORIES </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default LinkPage;
