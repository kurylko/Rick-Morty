import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {

    return (
        <div className="flex w-screen h-16 bg-purple-700 text-white font-normal sticky top-0 delay-1000">
            <ul className="flex justify-center items-center w-full gap-2 list-none">
                <Link to="characters">
                    <li className="text-white p-2.5 border-lg border-solid border-1 border-white">
                        Characters
                    </li>
                </Link>

                <Link to="locations">
                    <li className="text-white p-2.5 border-lg border-solid border-1 border-white">
                        Locations
                    </li>
                </Link>

            </ul>
        </div>
    )
}

export default Menu;