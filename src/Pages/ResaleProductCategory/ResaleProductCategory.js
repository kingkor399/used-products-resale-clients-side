import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BooknowModal from '../BooknowModal/BooknowModal';
import ResaleCategoryCard from './ResaleCategoryCard';

const ResaleProductCategory = () => {
    const resaleProducts = useLoaderData();
    const [booking, setBooking] = useState(null)
    return (
        <section>
            <div className='gap-6 grid grid-cols-1 grid-cols-2 grid-cols-3 mb-8 mt-8'>
                {
                    resaleProducts.map(resaleProduct => <ResaleCategoryCard
                        key={resaleProduct._id}
                        resaleProduct={resaleProduct}
                        setBooking={setBooking}
                    ></ResaleCategoryCard>)
                }
            </div>
            {   booking &&
                <BooknowModal
                booking={booking}
                setBooking={setBooking}
                ></BooknowModal>
            }
        </section>
    );
};

export default ResaleProductCategory;