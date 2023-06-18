import React, { useEffect, useRef } from 'react';
import biriyani from "../icon-image/Biriyani.png";
import iceream from "../icon-image/Iceream.png";
import momo from "../icon-image/Momo.png";
import noodle from "../icon-image/Noodle.png";
import pasta from "../icon-image/Pasta.png";
import pizza from "../icon-image/Pizza.png";
import { HashLink } from 'react-router-hash-link';

function Slider({clickedFood}) {
    let sliderContainer = useRef(null);

    useEffect(() => {
        // Adding scroll event listner inside use effect hook
        sliderContainer.current.addEventListener("wheel", (e) => {
            if (e.deltaY >= 0) {
                sliderContainer.current.scrollLeft += 670;
            }
            else sliderContainer.current.scrollLeft -= 670;
        });
    });

    // Function for scrolling when clicked on button
    function scrollSlider(point) {
        if (point === "right") {
            sliderContainer.current.scrollLeft += 670;
        }
        else sliderContainer.current.scrollLeft -= 670;
    };

    return (
        <div className='slider'>
            <h3> What is on your minde? </h3>
            <span>
                <button onClick={() => scrollSlider("left")}>Left</button>
                <button onClick={() => scrollSlider("right")}>Right</button>
            </span>
            <div ref={sliderContainer} className='slider-con'>
                <HashLink smooth to="/#recipeItems">
                    <img src={biriyani} alt='biriyani' onClick={()=> clickedFood("biryani", "american")}/>
                </HashLink>
                <HashLink smooth to="/#recipeItems">
                    <img src={pizza} alt='biriyani' onClick={()=> clickedFood("pizza", "italiyan")}/>
                </HashLink>
                <HashLink smooth to="/#recipeItems">
                    <img src={momo} alt='biriyani' onClick={()=> clickedFood("momo", "tibet")}/>
                </HashLink>
                <HashLink smooth to="/#recipeItems">
                    <img src={iceream} alt='biriyani' onClick={()=> clickedFood("ice cream", "San Francisco")}/>
                </HashLink>
                <HashLink smooth to="/#recipeItems">
                    <img src={pasta} alt='biriyani' onClick={()=> clickedFood("pasta", "american")}/>
                </HashLink>
                <HashLink smooth to="/#recipeItems">
                    <img src={noodle} alt='biriyani' onClick={()=> clickedFood("noodle", "chinice")}/>
                </HashLink>
            </div>
        </div>
    );
};

export default Slider;