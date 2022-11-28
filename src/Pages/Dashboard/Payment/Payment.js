import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutform from './CheckOutform';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
    const payment = useLoaderData();
    const { item } = payment
    return (
        <div>
            <h3 className='text-2xl font-semibold bg-base-200  w-1/2 text-center mt-2'>Payment for {item}</h3>
            <div className='w-96 py-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutform 
                    payment={payment}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;