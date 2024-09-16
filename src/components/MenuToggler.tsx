import React from "react";

interface IMenuToggler {
    showMenu: boolean;
    handleToggler: () => void;
}

const MenuToggler = ({showMenu, handleToggler} : IMenuToggler) => {
    return (
        <div className="flex bg-purple-700 text-white h-full w-14 mr-1" onClick={handleToggler}>
            {showMenu ? "Close X" : "Open ▼"}
        </div>
    )
}

export default MenuToggler