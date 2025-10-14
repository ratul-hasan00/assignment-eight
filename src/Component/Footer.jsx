import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-black mt-10'>
            <div className='footer-container flex justify-between max-w-[1250px] mx-auto py-10 border-b-1 border-gray-900'>
            <div className='margin-buttom'>
                <h1 className='footer-description text-white text-2xl font-semibold'>HERO.IO</h1>
                <p className='text-[#a1a1aa] text-sm w-[260px] mt-2 footer-text lorem'>HERO.IO is your all-in-one platform for discovering, downloading, and managing apps with ease and confidence. Built for simplicity, speed, and safety, HERO.IO offers an experience beyond traditional app stores. Find the latest games, productivity tools, entertainment apps, and trending software — all in one place.</p>
            </div>
            <div className='margin-buttom'>
                <h1 className='text-white text-2xl font-semibold footer-description'>Company</h1>
                <ul className='text-[#a1a1aa] text-sm space-y-3 mt-2 footer-text'>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='margin-buttom'>
                <h1 className='text-white text-2xl font-semibold footer-description'>Services</h1>
                <ul className='text-[#a1a1aa] text-sm space-y-3 mt-2 footer-text'>
                    <li>Products & Services</li>
                    <li>Customer Reviews</li>
                    <li>Download Apps</li>
                </ul>
            </div>
            <div className='margin-buttom'>
                <h1 className='text-white text-2xl font-semibold footer-description'>Information</h1>
                <ul className='text-[#a1a1aa] text-sm space-y-3 mt-2 footer-text'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Join Us</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='footer-text text-white text-xs text-center py-5'>© 2025 CS — HERO.IO All rights reserved.</p>
        </div>
        
        </div>
    );
};

export default Footer;