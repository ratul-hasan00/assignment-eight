import React from 'react';
import logo from '../../src/assets/logo.png';
import gitLogo from '../../src/assets/gitlogo.png';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
        <Link to = '/'><li><a>Home</a></li></Link>
        <Link to ='/apps'><li><a>Apps</a></li></Link>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <div className='flex items-center gap-2'><img className='w-[40px]' src={logo} alt="" /><a className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent text-xl font-semibold ">HERO.IO</a></div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <Link to = '/'><li><a>Home</a></li></Link>
      <Link to ='/apps'><li><a>Apps</a></li></Link>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <a className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"><img src={gitLogo} alt="" />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;