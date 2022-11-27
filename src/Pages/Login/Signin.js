import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import useToken from '../../hooks/useToken';

const Signin = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const {loginUser} = useContext(AuthProvider);
    const [loginerror, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    const handlelogin = data => {
        console.log(data);
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })

    }
    return (
        <div className='h-[400px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-base-200 rounded-lg'>
                <h2 className='text-xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handlelogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: "Email Address is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input  {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be at least 6 character' } })} type='password' className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role='alert'>{errors.password.message}</p>}
                    </div>
                    <input type="submit" value='Sign in' className='btn mt-4 btn-black font-bold w-full' />
                    <div>
                        {loginerror && <p className='text-red-600'>{loginerror}</p>}
                    </div>
                </form>
                <p>Don't have an account? <Link className='text-secondary text-center' to='/signup'>Create new account</Link></p>
            </div>
        </div>
    );
};

export default Signin;