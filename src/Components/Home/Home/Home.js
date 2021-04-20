import React from 'react';
import ReviewData from '../../User/ReviewData/ReviewData';
import Choose from '../Choose/Choose';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from '../News/News';
import Repair from '../Repair/Repair';
import ReviewSection from '../ReviewSection/ReviewSection';
import ServiceData from '../ServiceData/ServiceData';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
       <>
            <Header/>
            <TopBanner/>
            <Repair/>
            <ServiceData/>
            <Choose/>
            <ReviewSection/>
            <News/>
            <Footer/>
       </>
    );
};

export default Home;