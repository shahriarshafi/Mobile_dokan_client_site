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
                    <div class="card bg-success text-white">
                        <img src={n1} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE</h5>
                            <p class="card-text">Depending on the use of a mobile phone.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus voluptates hic in, possimus consectetur eligendi distinctio rerum autem culpa dolor reiciendis omnis, eos alias et deleniti consequatur modi quia numquam! Distinctio, molestias inventore tenetur ducimus sequi quibusdam sed labore quas pariatur quos, excepturi asperiores!</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                        Updated: 2 days ago
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-success text-white">
                        <img src={n2} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">THE TRANSFER OF DATA FROM TABLET TO PHONE</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis nisi quibusdam quidem minima, facere veniam consequatur ullam unde dolor corporis suscipit. Cupiditate earum facilis incidunt laudantium pariatur minus! Veniam, non in veritatis repellat quae aperiam ut maiores atque. Incidunt, saepe. Eveniet consequatur aspernatur eius, dolorum nesciunt porro quaerat repellendus.</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                        Updated: 10 days ago
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-success text-white">
                        <img src={n3} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">TERMS OF USE OF PHONES AND TABLETS IN HOT COUNTRIES</h5>
                            <p class="card-text"> Platform in mobile design. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium illo impedit consequatur ex, cupiditate doloribus odio cumque facilis voluptas dolorem iure deleniti atque nulla officia repudiandae quibusdam molestias quos qui dicta. Laboriosam quas vero eos laudantium voluptatibus iusto, nulla quasi adipisci aut repellat illum nemo? There are clear differences between smartphones and tablets and key differences in the way that users interact with them. It’s important for us - as U</p>
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