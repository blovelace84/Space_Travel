import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-content"> 
        <h1>Space Travel: Expanding Horizons Beyond Earth</h1> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/spacecrafts">Spacecrafts</Link></li>
            <li><Link to="/planets">Planets</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;