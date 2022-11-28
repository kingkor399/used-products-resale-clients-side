import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { updateUser, createUser, googleuser } = useContext(AuthProvider);
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handlesignup = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('user create successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.select, data.email)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.error(err))

    }

    const saveUser = (name, select, email) =>{
        const user = {name, select, email}
        fetch('https://products-resale-server-side.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreateUserEmail(email);
        })
    }

    const handleGoogleUser = () => {
        googleuser()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='h-[400px] flex justify-center items-center mb-20 mt-8'>
            <div className='w-96 p-7'>
                <h2 className='text-xl font-bold text-center mt-8'>SignUp</h2>
                <form onSubmit={handleSubmit(handlesignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", { required: "name is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role='alert'>{errors.name.message}</p>}
                    </div>
                    <select {...register("select", { required: "type is required" })} className="select select-info w-full max-w-xs mt-4">
                        <option disabled selected>Select type</option>
                        <option>seller</option>
                        <option>normal user</option>
                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: "Email Address is required" })} type='email' className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role='alert'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password at least 6 character' },
                        })} type='password' className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role='alert'>{errors.password.message}</p>}
                    </div>
                    <input type="submit" value='Sign Up' className='btn btn-accent w-full mt-4' />
                </form>
                <p className='text-center'>Already have an account? <Link className='text-secondary text-center' to='/signin'>Sign in</Link></p>
                <p className='text-center'>OR</p>
                <button onClick={handleGoogleUser} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;