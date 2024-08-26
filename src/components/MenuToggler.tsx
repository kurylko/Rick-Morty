import React from "react";

const MenuToggler = (props) => {
    const {showMenu, handleToggler} = props;

    return (
        <div className="menu-toggler" onClick={handleToggler}>
            {showMenu ? "Close X" : "Open ▼"}
        </div>
    )
}

export default MenuToggler