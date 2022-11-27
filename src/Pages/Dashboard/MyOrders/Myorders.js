import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../../Context/AuthContext';
import Loading from '../../Shared/Loading/Loading';
import MyOrderCard from './MyOrderCard';

const Myorders = () => {
    const {user, loading} = useContext(AuthProvider);
    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
    })

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl font-semibold'>My Orders</h3>
            {bookings &&
                bookings?.map(booking => <MyOrderCard
                key={booking._id}
                booking={booking}
                ></MyOrderCard>)
            }
        </div>
    );
};

export default Myorders;