import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeCIYKYNJ5a7mIM9NKii9F4beCcrP1oLsZ2nWxkvJE1YyJhIDVYzPQBChUMlhFjnL3m3tzhkTyMLV55j69nauUy00xlPyq2q2');

const StripePayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default StripePayment;