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

    let showCharacters = true;
    const handleClickCharacters = () => {
        console.log("clicked characters");
        setShowCharacter(true);
    };

    const handleClickLocations = () => {
        console.log("clicked locations");
        setShowCharacter(false)
    };

    console.log(showCharacters)

    return (
        <div className="layout">
            <div className="menu-container">
                {!showMenu ? null :
                    <Menu handleClickCharacters={handleClickCharacters}
                          handleClickLocations={handleClickLocations}
                    />
                }
                <MenuToggler
                    showMenu={showMenu}
                    handleToggler={handleToggler}
                />
            </div>

            <main className="layout-main">
                {!showCharacter ?
                    <Locations /> :
                    <Characters />
                }
            </main>
        </div>
    )
}

export default Layout