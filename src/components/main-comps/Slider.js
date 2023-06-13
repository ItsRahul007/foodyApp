import React, { useEffect } from 'react';
import biriyani from "../icon-image/Biriyani.png";
import iceream from "../icon-image/Iceream.png";
import momo from "../icon-image/Momo.png";
import noodle from "../icon-image/Noodle.png";
import pasta from "../icon-image/Pasta.png";
import pizza from "../icon-image/Pizza.png";


function Slider() {
    let sliderContainer;

    useEffect(() => {
        sliderContainer = document.querySelector(".slider-con");
        sliderContainer.addEventListener("wheel", (e)=>{
            if(e.deltaY >= 0){
                sliderContainer.scrollLeft += 600;
            }
            else sliderContainer.scrollLeft -= 600;
        })
    })
    function scrollSlider(point) {
        if(point==="right"){
            sliderContainer.scrollLeft += 670;
        }
        else sliderContainer.scrollLeft -= 670;
    }

    return (
        <div className='slider'>
            <h3> What is on your minde? </h3>
            <span>
                <button onClick={() => scrollSlider("left")}>Left</button>
                <button onClick={() => scrollSlider("right")}>Right</button>
            </span>
            <div id='sliderCon' className='slider-con'>
                <img src={biriyani} alt='biriyani' />
                <img src={pizza} alt='biriyani' />
                <img src={momo} alt='biriyani' />
                <img src={iceream} alt='biriyani' />
                <img src={pasta} alt='biriyani' />
                <img src={noodle} alt='biriyani' />
            </div>
        </div>
    );
};


export default Slider;