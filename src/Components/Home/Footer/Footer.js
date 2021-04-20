import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarker, faEnvelope, faTools } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="container-fluid bg-secondary mt-5">
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-4">
                        <h3 className="mt-3"><FontAwesomeIcon className="me-2" icon={faTools} /> REPAIR HUT</h3>
                    </div>
                    <div className="col-md-2">
                        <h4 className="mt-3">COMPANY</h4>
                        <h6>Home</h6>
                        <h6>Services</h6>
                        <h6>Blog</h6>
                    </div>
                    <div className="col-md-2">
                        <h6 className="mt-5">About Us</h6>
                        <h6>Shop</h6>
                        <h6>Contacts</h6>
                    </div>
                    <div className="col-md-4">
                        <h3 className="mt-3">CONTACTS</h3>
                        <p> <FontAwesomeIcon className="me-2" icon={faPhone} />01686687843</p>
                        <p> <FontAwesomeIcon className="me-2" icon={faMapMarker} />HR Vobon, South Thakurpara</p>
                        <p><FontAwesomeIcon className="me-2" icon={faEnvelope} />repair.hut@gmail.com</p>
                    </div>
                </div>
                <p className="text-white text-center">Copyright All Rights Reserved By @Sami-2021</p>
            </div>
        </div>
    );
};

export default Footer;