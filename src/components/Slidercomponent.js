import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";

const SliderComponent = () => {
    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, left: '10px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                     backgroundColor: 'black', width: '30px', height: '30px', borderRadius: '50%' }}
                onClick={onClick}
            >
                {'<'}
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, right: '10px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: '30px', height: '30px', borderRadius: '50%' }}
                onClick={onClick}
            >
                {'>'}
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set the speed (in milliseconds) of the autoplay
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slider">
                    <img src={slider1} alt="Slide 1" />
                </div>
                <div className="slider">
                    <img src={slider2} alt="Slide 2" />
                </div>
                <div className="slider">
                    <img src={slider3} alt="Slide 3" />
                </div>
                <div className="slider">
                    <img src={slider4} alt="Slide 4" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
