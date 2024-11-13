import React, {useEffect, useRef} from 'react';
import {Link, NavLink} from "react-router-dom";
import image from '../../assets/images/logo.png';

const Header = () => {

    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                headerRef.current.classList.add('scrolledColor');
            }else {
                headerRef.current.classList.remove('scrolledColor');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    return (
        <header  className="header sticky-top">
            <nav ref={headerRef} className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <div className="logo d-flex align-items-center">
                        <Link className="navbar-brand" to="/">
                            <span className='d-flex align-items-center fw-normal'>
                                <img src={image} alt="logo"/>
                                <span className='rant fw-semibold'>Restau</span>rant
                            </span>
                        </Link>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto fw-medium">
                            <li className="nav-item me-4">
                                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Home</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >About</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Portfolio</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/clients" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Clients</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Blog</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="button-text">
                        <button>book a table</button>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;