import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2>We ready to have you the best dining experiences</h2>
                <div className="text">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <span><i className="bi bi-clock"></i></span>
                            <h5>Opening hours</h5>
                            <p>Monday - Sunday</p>
                            <p>9:00 AM to 11:30 PM</p>
                        </div>
                        <div className="col-12 col-lg-3">
                            <span><i className="bi bi-telephone-outbound"></i></span>
                            <h5>LET'S TALK</h5>
                            <p>Phone: 1-800-222-4545</p>
                            <p>Fax: 1-800-222-4545</p>
                        </div>
                        <div className="col-12 col-lg-3">
                            <span><i className="bi bi-envelope"></i></span>
                            <h5>BOOK A TABLE</h5>
                            <p>Email: demo@website.com</p>
                            <p>Support: support@website.com</p>
                        </div>
                        <div className="col-12 col-lg-3">
                            <span><i className="bi bi-geo-alt"></i></span>
                            <h5>Our Address</h5>
                            <p>123 Stree New York City , United</p>
                            <p>States Of America.</p>
                        </div>
                    </div>
                    <div className="icon-box d-flex align-items-center justify-content-center gap-4">
                        <div className='icon'><i className="bi bi-facebook"></i></div>
                        <div className='icon'><i className="bi bi-twitter-x"></i></div>
                        <div className='icon'><i className="bi bi-instagram"></i></div>
                        <div className='icon'><i className="bi bi-linkedin"></i></div>
                    </div>
                    <p className='reserved'>© 2023 <span className='niomax'>Niomax</span> All Rights Reserved </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;