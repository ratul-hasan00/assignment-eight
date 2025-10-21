import React from 'react';
import Navbar from '../../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer';
  import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;