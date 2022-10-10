import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ipx from "../Images/ip.png"
const Navbar = ({ handleThemeChange, theme }) => {
    const menuItems = <>
        {/* <li><Link to="/">Home</Link></li> */}
        {/* <li><NavLink to="/appointment">Appointment</NavLink></li>
        <li><NavLink to="/psycologist">Psycologist</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li> */}
    </>
    return (
        <div class="navbar fixed top-0 w-full z-50 lg:px-10 bg-black">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img src={ipx} alt="" />
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-compact menu-horizontal p-0 text text-medium font-semibold">
                    {menuItems}
                </ul>
            </div>
            <div class="dropdown dropdown-end margin-3">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;