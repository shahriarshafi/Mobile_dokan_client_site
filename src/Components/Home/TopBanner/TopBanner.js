import React from 'react';
import tb1 from '../../../Images/tb1.jpg';
import tb2 from '../../../Images/tb2.jpg';
import tb3 from '../../../Images/tb3.jpg';
import './TopBanner.css'


const TopBanner = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active h-75">
                        <img src={tb1} class="d-block img-fluid w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Bring your gadget <br/> back to life</h1>
                            <h4>Your favorite gadget broken? or not working!!! Come to us and bring your gadget back to your life.</h4>
                        </div>
                    </div>
                    <div class="carousel-item h-75">
                        <img src={tb2} class="d-block img-fluid w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>We fix your phone</h1>
                            <h4>We can fix all the problem of your phone. If you need to repair your phone asap. <br/> Don't hesitate, Come to US!!! </h4>
                        </div>
                    </div>
                    <div class="carousel-item h-75">
                        <img src={tb3} class="d-block img-fluid w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>We are open get <br/> quantity repairs</h1>
                            <h4>We are always open to serve you the best. We will repair all type of gadget related problem. <br/> So, Why are you Late???</h4>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;