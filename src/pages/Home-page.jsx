import React from 'react';
import Layout from "../components/layout/Layout.jsx";
import Hero from "../components/hero/Hero.jsx";
import About from "../components/about/About.jsx";
import Popular from "../components/popular/Popular.jsx";
import Testimonial from "../components/testimonial/Testimonial.jsx";
import BookNow from "../components/bookNow/BookNow.jsx";

const HomePage = () => {
    return (
        <Layout>
            <Hero/>
            <About/>
            <Popular/>
            <BookNow/>
            <Testimonial/>
        </Layout>
    );
};

export default HomePage;