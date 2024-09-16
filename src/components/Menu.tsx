import React from "react";
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="flex w-screen h-16 bg-primary text-white font-normal sticky top-0 delay-1000 justify-between">
            <div className="flex justify-center items-center w-full gap-4 list-none pb-1">
                <Link to="/characters" className="link link-hover">
                    <button
                        className="btn btn-outline text-white p-2.5 border-lg border-solid border-1 border-white hover:bg-border">Characters
                    </button>
                </Link>
                <Link to="/locations" className="link link-hover">
                    <button
                        className="btn btn-outline text-white p-2.5 border-lg border-solid border-1 border-white hover:bg-border">Locations
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;