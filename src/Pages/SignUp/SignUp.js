import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { updateUser, createUser, googleuser } = useContext(AuthProvider);
    const navigate = useNavigate();
    const handlesignup = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('user create successfully')
                navigate('/')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.error(err))

    }

    const handleGoogleUser = () => {
        googleuser()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        .catch (err => console.log(err))
    }

    return (
        <div className='h-[400px] flex justify-center items-center mb-10 mt-5'>
            <div className='w-96 p-7'>
                <h2 className='text-xl font-bold text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handlesignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", { required: "name is required" })} type='text' className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role='alert'>{errors.name.message}</p>}
                    </div>
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
                            // pattern: { value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
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