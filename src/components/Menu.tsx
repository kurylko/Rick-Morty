import React from "react";

const Menu = () => {

    return (
        <div className="flex w-screen h-16 bg-primary text-white font-normal sticky top-0 delay-1000 justify-between">
            <div className="flex justify-center items-center w-full gap-4 list-none">
                <a href="characters" className="link link-hover">
                    <button
                        className="btn btn-outline text-white p-2.5 border-lg border-solid border-1 border-white">Characters
                    </button>
                </a>
                <a href="locations" className="link link-hover">
                    <button
                        className="btn btn-outline text-white p-2.5 border-lg border-solid border-1 border-white">Locations
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Menu;