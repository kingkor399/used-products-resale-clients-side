import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png'
const Navbar = () => {
    const menuItems =
        <>
            <li className='font-bold'><Link to='/'>Home</Link></li>
        </>
    return (
        <div className="navbar h-20 bg-info rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
        </div>
    );
};

export default Navbar;