import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ResaleCategoryCard from './ResaleCategoryCard';

const ResaleProductCategory = () => {
    const resaleProducts = useLoaderData();
    return (
        <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 mb-8 mt-8'>
            {
                resaleProducts.map(resaleProduct => <ResaleCategoryCard
                key={resaleProduct._id}
                resaleProduct={resaleProduct}
                ></ResaleCategoryCard>)
            }
        </div>
    );
};

export default ResaleProductCategory;