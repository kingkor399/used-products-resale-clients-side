import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderCard = ({ booking }) => {
    const { img, item, price, _id} = booking;
    return (
        <div className="card w-96 bg-base-200 mt-6 mb-6 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item}
                </h2>
                <h3 className='font-bold'><span className='text-orange-400'>Price:</span> {price}</h3>
                <div className="card-actions justify-end">
                    <button className='btn btn-success font-bold'><Link to={`/dashboard/payment/${_id}`}>Pay</Link></button>
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;