import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://products-resale-server-side.vercel.app/users')
            .then(res => res.json())
    })

    const handleDelete = alluser =>{
        fetch(`https://products-resale-server-side.vercel.app/alluser/${alluser._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                refetch();
                toast.success('user deleted successfuly')
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
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,i) => <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{ user?.role !== 'admin' && <button className='btn btn-xs btn-success'>Make Admin</button>}</td>
                                <td><button onClick={() => handleDelete(user)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;