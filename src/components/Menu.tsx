import React from "react";
import {Link} from "react-router-dom";

const Menu = (props) => {
    const {handleClickCharacters, handleClickLocations} = props;

    return (
        <div className="menu">
            <ul className="menu-list">
                <Link to="characters">
                    <li className="menu-item">
                        Characters
                    </li>
                </Link>

                <Link to="locations">
                    <li className="menu-item">
                        Locations
                    </li>
                </Link>

            </ul>
        </div>
    )
}

export default Menu;