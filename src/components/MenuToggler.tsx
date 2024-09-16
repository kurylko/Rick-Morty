import React from "react";

interface IMenuToggler {
    showMenu: boolean;
    handleToggler: () => void;
}

const MenuToggler = ({showMenu, handleToggler} : IMenuToggler) => {
    return (
        <div className="flex bg-primary text-white h-full w-1/12 pr-1 justify-end" onClick={handleToggler}>
            {showMenu ? "Close X" : "Open ▼"}
        </div>
    )
}

export default MenuToggler