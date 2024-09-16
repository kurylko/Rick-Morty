import React from "react";
import banner from "./../../public/banner.jpg";

const Banner = () => {
    return (
        <div className="w-full relative h-auto">
            <img className="block w-full h-full" src={banner} alt="banner-image"></img>
            <span className="absolute w-10/12 h-10/12 text-white font-bold text-3xl transform -translate-x-1/2 -translate-y-1/2 top-3/4 left-1/2 ">Start here ⇩ </span>
        </div>
    )
}

export default Banner;