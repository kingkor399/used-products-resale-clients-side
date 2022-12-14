import React from 'react';

const ResaleCategoryCard = ({ resaleProduct, setBooking }) => {
    const { name, img, location, resale, original_price, use, posted, seller } = resaleProduct;
    return (
        <div className="max-w-xs rounded-md shadow-md bg-base-200 dark:text-gray-100">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100 font-semibold">Seller: {seller}</p>
                    <p className="dark:text-gray-100 font-semibold">Resale_price: {resale}</p>
                    <p className="dark:text-gray-100 font-semibold">Original_price: {original_price}</p>
                    <p className="dark:text-gray-100 font-semibold">Use: {use}</p>
                    <p className="dark:text-gray-100 font-semibold">location: {location}</p>
                    <p className="dark:text-gray-100 font-semibold">Posted: {posted}</p>
                </div>
                
                <label 
                htmlFor="booknow-modal" 
                className="btn btn-success"
                onClick={() => setBooking(resaleProduct)}
                >Book Now</label>
            </div>
        </div>
    );
};

export default ResaleCategoryCard;