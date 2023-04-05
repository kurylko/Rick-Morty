import Menu from "./Menu";
import {useState} from "react";
import MenuToggler from "./MenuToggler"
import Characters from "../pages/Characters";
import Locations from "../pages/Locations";

const Layout = (props: any) => {
    const [showMenu, setShowMenu] = useState(true);
    const [showCharacter, setShowCharacter] = useState(true)

    const handleToggler = () => {
        console.log("close the menu");
        setShowMenu(!showMenu)
    };


    return (
        <div className="layout">
            <div className="menu-container">
                {!showMenu ? null :
                    <Menu/>
                }
                <MenuToggler
                    showMenu={showMenu}
                    handleToggler={handleToggler}
                />
            </div>
        </div>
    )
}

export default Layout