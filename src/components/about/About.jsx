import React from 'react';
import image from '../../assets/images/about.png';
import image2 from '../../assets/images/side_about.png';
import packages from '../../assets/images/package.png';
import bag from '../../assets/images/bag.png';
import medal from '../../assets/images/medal.png';

const About = () => {
    return (
        <section className="about">
            <img className='side-img' src={image2} alt="image"/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 main-img">
                        <img src={image} alt="image"/>
                    </div>
                    <div className="col-12 col-lg-6 tab">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="true">About</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false">Experience</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab" tabindex="0">
                                <h2>Exceptional culinary experience and delicious food</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                <div className="more">
                                    <button>about more</button>
                                    <span><i className="bi bi-telephone-outbound"></i> +88 3426 739 485</span>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-experience" role="tabpanel"
                                 aria-labelledby="pills-experience-tab" tabindex="0">
                                <h2>This is experience</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.
                                    Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem
                                    ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut
                                    labore et dolore magna minim veniam nostrud exercitation.</p>
                                <div className="more">
                                    <button>about more</button>
                                    <span><i className="bi bi-telephone-outbound"></i> +88 3426 739 485</span>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                 aria-labelledby="pills-contact-tab" tabindex="0">
                                <h2>This is contact</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.
                                    Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem
                                    ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut
                                    labore et dolore magna minim veniam nostrud exercitation.</p>
                                <div className="more">
                                    <button>about more</button>
                                    <span><i className="bi bi-telephone-outbound"></i> +88 3426 739 485</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 feature">
                        <div className="about-feature d-flex align-items-center gap-4">
                            <div className="feature-image d-flex align-items-center justify-content-center">
                                <img src={packages} alt="image"/>
                            </div>
                            <div className="feature-text">
                                <h4>fast delivery</h4>
                                <p>Within 30 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 feature">
                        <div className="about-feature d-flex align-items-center gap-4">
                            <div className="feature-image d-flex align-items-center justify-content-center">
                                <img src={medal} alt="image"/>
                            </div>
                            <div className="feature-text">
                                <h4>absolute dining</h4>
                                <p>Best buffet restaurant</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 feature">
                        <div className="about-feature d-flex align-items-center gap-4">
                            <div className="feature-image d-flex align-items-center justify-content-center">
                                <img src={bag} alt="image"/>
                            </div>
                            <div className="feature-text">
                                <h4>pickup delivery</h4>
                                <p>Grab your food order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;