import Menu from "./Menu";
import {useState} from "react";
import MenuToggler from "./MenuToggler"

const Layout = () => {
    const [showMenu, setShowMenu] = useState(true);

    const handleToggler = () => {
        setShowMenu(!showMenu)
    };


    return (
        <div className="flex-col w-full justify-center items-center">
            <div className="flex w-full justify-end bg-purple-700 h-16">
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

export default Layout;