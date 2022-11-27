import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const Myproducts = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/myproducts')
            .then(res => res.json())
    })

    const handleDelete = myproduct => {
        fetch(`http://localhost:5000/myproduct/${myproduct._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    refetch();
                    toast.success('product deleted successfuly');
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={product.image} alt='/' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleDelete(product)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myproducts;