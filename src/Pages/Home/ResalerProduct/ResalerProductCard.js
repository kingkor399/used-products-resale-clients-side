import React from 'react';
import { Link } from 'react-router-dom';

const ResalerProductCard = ({ product }) => {
    const { name, img, id } = product;
    return (
        <div className="max-w-xs rounded-md shadow-md bg-base-200 dark:text-gray-100">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                </div>
                <Link to={`/category/${id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-bold tracking-wide rounded-md bg-orange-400">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ResalerProductCard;