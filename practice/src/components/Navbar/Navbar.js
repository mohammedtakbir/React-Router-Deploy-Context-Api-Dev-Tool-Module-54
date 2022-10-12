import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='text-center'>
            <NavLink style={({ isActive }) => {
                return isActive ? { color: 'lightseagreen' } : undefined
            }} className='m-4 inline-block text-xl font-medium' to='/home'>Home</NavLink>
            <NavLink style={({ isActive }) => {
                return isActive ? { color: 'lightseagreen' } : undefined
            }} className='m-4 inline-block text-xl font-medium' to='/orders'>Orders</NavLink>
            <NavLink style={({ isActive }) => {
                return isActive ? { color: 'lightseagreen' } : undefined
            }} className='m-4 inline-block text-xl font-medium' to='/about'>About</NavLink>
            <NavLink style={({ isActive }) => {
                return isActive ? { color: 'lightseagreen' } : undefined
            }} className='m-4 inline-block text-xl font-medium' to='/grandpa'>Grandpa</NavLink>
        </nav>
    );
};

export default Navbar;