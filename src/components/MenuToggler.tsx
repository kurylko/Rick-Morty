import React from "react";

interface IMenuToggler {
    showMenu: boolean;
    handleToggler: () => void;
}

const MenuToggler = ({showMenu, handleToggler} : IMenuToggler) => {
    return (
        <div className="menu-toggler" onClick={handleToggler}>
            {showMenu ? "Close X" : "Open ▼"}
        </div>
    )
}

export default MenuToggler