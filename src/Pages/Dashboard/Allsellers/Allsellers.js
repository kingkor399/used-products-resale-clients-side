import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allsellers = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`https://products-resale-server-side.vercel.app/sellers`)
            .then(res => res.json())
    })

    const handleDelete = seller => {
        fetch(`https://products-resale-server-side.vercel.app/sellers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success('seller deleted successfuly')
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr seller={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td><button onClick={() => handleDelete(seller)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;