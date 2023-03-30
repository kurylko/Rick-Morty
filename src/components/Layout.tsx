import Menu from "./Menu";
import {useState} from "react";
import MenuToggler from "./MenuToggler"

const Layout = (props: any) => {
    const [showMenu, setShowMenu] = useState();

    const handleToggler = () => {
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

            <main className="layout-main">
                {props.children}
                <div>1</div>
                <div>2</div>
            </main>
        </div>
    )
}

export default Layout