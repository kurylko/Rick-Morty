import React from "react";
import banner from "./../../public/banner.jpg";

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-image" src={banner} alt="banner-image"></img>
            <span className="banner-text">Start here ⇩ </span>
        </div>
    )
}

export default Banner;