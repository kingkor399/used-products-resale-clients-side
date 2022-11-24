import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ResalerProductCard from './ResalerProductCard';

const ResalerProduct = () => {
    const {data: products = [], isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/products')
                       .then(res => res.json())
    })
    return (
        <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 mb-8'>
            {
                products.map(product => <ResalerProductCard
                key={product.id}
                product={product}
                ></ResalerProductCard>)
            }
        </div>
    );
};

export default ResalerProduct;