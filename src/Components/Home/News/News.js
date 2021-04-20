import React from 'react';
import n1 from '../../../Images/n1.jpg';
import n2 from '../../../Images/n2.jpg';
import n3 from '../../../Images/n3.jpg';
import './News.css';

const News = () => {
    return (
        <div className="container">
            <h1 className="text-center text-primary my-5">OUR NEWS</h1>
            <div className="row">
                <div className="col-md-4">
                    <div class="card bg-info">
                        <img src={n1} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE</h5>
                            <p class="card-text">In today’s era of technological advancement and digital life, a mobile phone is a necessity one cannot imagine living without. It’s the fastest and easiest way to connect with your loved ones, friends, clients, and vendors. Depending on the use of a mobile phone, there is a wide categorization of mobile phones ranging from simple to highly sophisticated.</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                        Updated: 2 days ago
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-info">
                        <img src={n2} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">THE TRANSFER OF DATA FROM TABLET TO PHONE</h5>
                            <p class="card-text">OTG USB Sticks work in the most basic of ways: plug the USB key into your computer and transfer some files to it (be it music, movies, presentations for work, or masses of photos), then plug the USB key into your phone or tablet to access those files while you are on the go. The neat thing is that you don’t even have to transfer the files over to the</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                        Updated: 10 days ago
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-info">
                        <img src={n3} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">TERMS OF USE OF PHONES AND TABLETS IN HOT COUNTRIES</h5>
                            <p class="card-text">It has become an industry standard to put “mobile first” when designing for the mobile web and while this is, in general, a good thing – it has also left to a neglect of the tablet platform in mobile design. There are clear differences between smartphones and tablets and key differences in the way that users interact with them. It’s important for us - as U</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                           Updated: 5 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;