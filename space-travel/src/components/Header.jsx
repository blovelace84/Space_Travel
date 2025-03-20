import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="/"></a>Home</li>
                    <li><a href="/spacecrafts"></a>Spacecraft</li>
                    <li><a href="/planets"></a>Planets</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;