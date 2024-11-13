import React from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import tomato from '../../assets/images/customer_side.png';
import grass from '../../assets/images/customer_right.png';
import textImg from '../../assets/images/customer_textImg.svg';
import data from '../../dummy data/testimonialData.js';

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="slick-prev custom-arrow"
        onClick={onClick}
        aria-label="Previous Slide"
    >
        <i className="bi bi-chevron-left"></i>
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="slick-next custom-arrow"
        onClick={onClick}
        aria-label="Next Slide"
    >
        <i className="bi bi-chevron-right"></i>
    </button>
);

const Testimonial = () => {

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };


    return (
        <section className="testimonial">
            <img className='testimonial-img1' src={tomato} alt="image"/>
            <img className='testimonial-img2' src={grass} alt="image"/>
            <div className="container">
                <div className="testimonial-text d-flex align-items-center">
                    <div className="box"></div>
                    <h5>Crispy, Every Bite Taste</h5>
                </div>
                <h2>What Some of my Customers Say</h2>

                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='cus-box d-flex'>
                                        <div className="text-box">
                                            <img className='textImg' src={textImg} alt="image"/>
                                            <span className="quote-mark"><i className="bi bi-quote"></i></span>
                                            <p className="quote-text">{item['comment']}</p>
                                            <div
                                                className="cus-identity d-flex align-items-center justify-content-between">
                                                <div className="text">
                                                    <h5>{item['name']}</h5>
                                                    <p>{item['address']}</p>
                                                </div>
                                                <div className="image">
                                                    <img src={item['profile']} alt="image"/>
                                                    <div className="line"></div>
                                                </div>
                                            </div>
                                            <hr className='bottom-line'/>
                                        </div>
                                        <div className="video-box">
                                            <ReactPlayer url={item['video_link']} controls className="video"/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;