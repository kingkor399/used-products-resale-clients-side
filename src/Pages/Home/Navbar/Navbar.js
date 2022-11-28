import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';
import logo from '../../../image/logo.png'
const Navbar = () => {
    const { user, logOut } = useContext(AuthProvider);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.err(err))
    }
    const menuItems =
        <>
            <li className='font-bold'><Link to='/'>Home</Link></li>
            <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
            <li className='font-bold'><Link to='/blog'>Blog</Link></li>
            {
                user?.uid ?
                    <>
                        <li><button className='font-bold' onClick={handleSignOut}>SignOut</button></li>
                    </>
                    :
                    <li className='font-bold'><Link to='/signin'>Login</Link></li>

            }
        </>
    return (
        <div className="navbar h-20 bg-info rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={logo} />
                    </div>
                </div>
                <h3 className='text-2xl mr-8 font-bold text-red-500'>Resale BD</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;