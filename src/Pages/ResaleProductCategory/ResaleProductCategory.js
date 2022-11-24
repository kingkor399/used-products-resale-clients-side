import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ResaleCategoryCard from './ResaleCategoryCard';

const ResaleProductCategory = () => {
    const resaleProducts = useLoaderData();
    return (
        <div>
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