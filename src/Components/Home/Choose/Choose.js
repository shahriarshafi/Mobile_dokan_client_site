import React from 'react';
import c3 from '../../../Images/c3.png';
import c2 from '../../../Images/c2.png';
import c1 from '../../../Images/c1.png';

const Choose = () => {
    return (
        <>
            <div className="container-fluid bg-light mt-5">
            <div className="container">
                <h1 class="text-center text-primary my-5">WHY CHOOSE US</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={c3} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4> QUALITY GUARANTEE</h4>
                        <p class="text-wrap">A quality guarantee is an assurance of quality and customer satisfaction issued by a company and offered primarily to paying customers who have purchased products or services from the company.</p>
                        <a className="text-decoration-none text-danger" href="#">Read More...</a>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h4> CORPORATE SERVICES</h4>
                        <p class="text-wrap">Corporate services are activities that combine or consolidate certain enterprise-wide needed support services, provided based on specialized knowledge, best practices, and technology to serve internal (and sometimes external) customers and business partners. The term corporate services providers (CSPs) is also used.</p>
                        <a className="text-decoration-none text-danger" href="#">Read More...</a>
                    </div>
                    <div className="col-md-6">
                    <img className="img-fluid" src={c1} alt=""/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                    <img className="img-fluid" src={c2} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4> CUSTOMER SERVICE</h4>
                        <p class="text-wrap" >Customer service is the act of providing support to both prospective and existing customers. Customer service professionals commonly answer customer questions through in-person, phone, email, chat, and social media interactions and may also be responsible for creating documentation for self-service support.</p>
                        <a className="text-decoration-none text-danger" href="#">Read More...</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Choose;