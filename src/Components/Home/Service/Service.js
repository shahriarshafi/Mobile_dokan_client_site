import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    return (
        <>
            <div className="col-md-4 mb-5">
                <div class="card shadow-sm" style={{overflow:"hidden"}}>
                <img className="card-img-top img-fluid w-100" src={service.imageURL} alt="" />
                    <div className="card-header d-flex  align-items-center">                      
                        <div>
                            <h4 className="text-success">{service.name}</h4>
                            <p className="m-0">{service.description}</p>
                            <Link to={`user/${service._id}`}><button class="text-center btn btn-success mt-2">Purchase Now</button></Link> 
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Service;