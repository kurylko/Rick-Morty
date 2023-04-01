import React from "react";

const Menu = (props) => {
    const {handleClickCharacters, handleClickLocations} = props;

    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item" onClick={handleClickCharacters}>
                    Characters
                </li>
                <li className="menu-item" onClick={handleClickLocations}>
                    Locations
                </li>
            </ul>
        </div>
    )
}

export default Menu;