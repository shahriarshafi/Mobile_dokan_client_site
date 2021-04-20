import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    return (
        <>
            <div className="col-md-4 mb-3">
                <div class="card text-dark bg-warning border-primary mb-3">
                <div class="card-header"><p className="text-center"><img className="img-fluid rounded-circle image" src={review.imageURL} alt=""/></p></div>
                    <div class="card-body">
                        <h5 class="card-title text-center">{review.name}-{review.designation} </h5>
                        <p class="card-text text-center">{review.description}</p>
                        <p class="card-text text-center">{review.rating} (Out of 5)</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;