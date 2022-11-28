import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const imageHostkey = process.env.REACT_APP_imbb_key;
    const handleProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const products = {
                    name: data.name,
                    price: data.price,
                    year: data.year,
                    image: imgData.data.url
                }

                fetch('https://products-resale-server-side.vercel.app/products',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(products)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success('Products added successfuly');
                    navigate('/dashboard/myproduct');
                })
            }
        })
    }

    return (
        <div className='w-96 p-7'>
            <form onSubmit={handleSubmit(handleProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">product name</span></label>
                    <input {...register("name", { required: "name is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">price</span></label>
                    <input {...register("price", { required: "price is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label className="label"><span className="label-text">condition type</span></label>
                    <select {...register("condtion", { required: "condition is required" })} className="select select-info w-full max-w-xs mt-4">
                        <option>excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">mobile number</span></label>
                    <input {...register("number", { required: "number is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">location</span></label>
                    <input {...register("location", { required: "location is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label className="label"><span className="label-text">product category </span></label>
                    <select {...register("product", { required: "product is required" })} className="select select-info w-full max-w-xs mt-4">
                        <option>Dell Inspiron 3421</option>
                        <option>Dell Vostro 3468</option>
                        <option>Asus VivoBook S510</option>
                        <option>ASUS VivoBook S15</option>
                        <option>HP EliteBook Folio</option>
                        <option>HP Elite Book 840</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">description</span></label>
                    <input {...register("description", { required: "description is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Year of purchase</span></label>
                    <input {...register("year", { required: "year is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input {...register("image", { required: "img is required" })} type='file' className="input input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" value='Add Product' className='btn btn-accent w-full mt-4' />
            </form>
        </div>
    );
};

export default AddProducts;