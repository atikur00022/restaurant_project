import React from 'react';
import image from '../../assets/images/hero.png';
import offer from '../../assets/images/Offer.png';
import star from '../../assets/images/star.png';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="box-left">
                            <div className="text">
                                <h1>Taste the authentic Saudi cuisine</h1>
                            </div>
                            <p>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
                            <button>Explore Menu</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-end">
                        <div className="image">
                            <img className='star' src={star} alt="image"/>
                            <img className='menu' src={image} alt="image"/>
                            <img className='offer' src={offer} alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;