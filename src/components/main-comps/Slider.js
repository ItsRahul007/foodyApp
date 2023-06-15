import React, { useEffect } from 'react';
import biriyani from "../icon-image/Biriyani.png";
import iceream from "../icon-image/Iceream.png";
import momo from "../icon-image/Momo.png";
import noodle from "../icon-image/Noodle.png";
import pasta from "../icon-image/Pasta.png";
import pizza from "../icon-image/Pizza.png";

function Slider({clickedFood}) {
    let sliderContainer; //Declaring first for not getting error

    useEffect(() => {
        // Updating sliderContainer in useEffect and adding scroll event listner
        sliderContainer = document.getElementById("sliderCon");
        sliderContainer.addEventListener("wheel", (e) => {
            if (e.deltaY >= 0) {
                sliderContainer.scrollLeft += 600;
            }
            else sliderContainer.scrollLeft -= 600;
        });
    });

    // Function for scrolling when clicked on button
    function scrollSlider(point) {
        if (point === "right") {
            sliderContainer.scrollLeft += 670;
        }
        else sliderContainer.scrollLeft -= 670;
    };

    return (
        <div className='slider'>
            <h3> What is on your minde? </h3>
            <span>
                <button onClick={() => scrollSlider("left")}>Left</button>
                <button onClick={() => scrollSlider("right")}>Right</button>
            </span>
            <div id='sliderCon' className='slider-con'>
                <img src={biriyani} alt='biriyani' onClick={()=> clickedFood("biryani", "american")}/>
                <img src={pizza} alt='biriyani' onClick={()=> clickedFood("pizza", "italiyan")}/>
                <img src={momo} alt='biriyani' onClick={()=> clickedFood("momo", "tibet")}/>
                <img src={iceream} alt='biriyani' onClick={()=> clickedFood("ice cream", "San Francisco")}/>
                <img src={pasta} alt='biriyani' onClick={()=> clickedFood("pasta", "american")}/>
                <img src={noodle} alt='biriyani' onClick={()=> clickedFood("noodle", "chinice")}/>
            </div>
        </div>
    );
};

export default Slider;