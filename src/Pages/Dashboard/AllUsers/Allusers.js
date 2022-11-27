import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())
    })

    return (
        <div>
            <h2 className='text-3xl font-semibold'>All Users</h2>
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
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;