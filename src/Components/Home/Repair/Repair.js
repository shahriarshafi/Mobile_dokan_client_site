import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCamera , faLaptop , faTabletAlt , faVideo , faGamepad} from '@fortawesome/free-solid-svg-icons';


const Repair = () => {
    return (
        <>
            <div className="container">
                <h1 class="text-center text-primary my-5">WE REPAIR</h1>
                <div className="row my-5">
                    <div className="col-md-4 col-sm-12 m-sm-auto d-flex justify-content-center">
                        <div className="col-md-2 fs-2">
                        <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <div className="col-md-10">
                            <h4>MOBILE PHONES</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faCamera} /></div>
                        <div className="col-md-10">
                            <h4>PHOTO CAMERAS</h4>
                            <p>Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faTabletAlt} /></div>
                        <div className="col-md-10">
                            <h4>TABLETS</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faLaptop} /></div>
                        <div className="col-md-10">
                            <h4>COMPUTERS</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faVideo} /></div>
                        <div className="col-md-10">
                            <h4>VIDEO CAMERAS</h4>
                            <p>Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faGamepad} /></div>
                        <div className="col-md-10">
                            <h4>GAME CONSOLES</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Repair;