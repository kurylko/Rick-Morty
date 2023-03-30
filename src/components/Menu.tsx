import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {

    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to="/characters" className="menu-link">Characters</Link>
                </li>
                <li className="menu-item" >
                    <Link to="/locations" className="menu-link">Locations</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;