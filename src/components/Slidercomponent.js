// SliderComponent.js
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <div className="slick-prev">Previous</div>,
        nextArrow: <div className="slick-next">Next</div>
    };

    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={slider1} alt="Slide 1" />
                </div>
                <div>
                    <img src={slider2} alt="Slide 1" />
                </div>
                <div>
                    <img src={slider3} alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
