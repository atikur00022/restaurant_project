import React from "react";
import Slider from "react-slick";
import popular from '../../assets/images/side_popular.png';
import data from '../../dummy data/foodItemData.js';

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

const Popular = () => {

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };


    return (
        <section className="popular">
            <img className='popular-img' src={popular} alt="image"/>
            <div className="container">
                <div className="popular-text d-flex align-items-center">
                    <div className="box"></div>
                    <h5>Crispy, Every Bite Taste</h5>
                </div>
                <h2>POPULAR FOOD ITEMS</h2>

                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={item['image']} alt="image"/>
                                        </div>
                                        <div className="line"></div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item['title']}</h5>
                                            <p className="card-text">{item['short_des']}</p>
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

export default Popular;