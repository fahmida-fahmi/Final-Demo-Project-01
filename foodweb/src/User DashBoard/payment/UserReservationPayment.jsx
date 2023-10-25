import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { GrSend } from 'react-icons/gr';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../pages/useCart/UseCart';

const stripePromise = loadStripe(import.meta.env.VITE_payment_public_key);

const UserReservationPayment = () => {
    const [cart] = useCart()
    const total = cart.reduce((acc, value) => acc + value.price , 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-2/3 mx-auto my-auto'>
            <h1 className='text-center text-5xl uppercase mb-14'>payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm  cart={cart} price={price}/>
            </Elements>
        </div>
    );
};

export default UserReservationPayment;