import React from 'react';
import navlogo from '@/public/logo3.png';
import Image from 'next/image';
import '@/styles/navbar.css';
import Link from 'next/link';



const Navbar = () => {
    return (
        <>
            <header className='header'>
                <nav className='navbar navbar-expand-lg header-nav fixed-top'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href='/'>New Truckers Driving Academy</a>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                            <ul className='navbar-nav ml-auto mb-2 mb-lg-0 gap-3'>
                                <li className='nav-item'>
                                    <a href='/' className='nav-link' aria-current='page'>Home</a>                                    
                                </li>
                                <li className='nav-item'>
                                    <a href='/about' className='nav-link' aria-current='page'>About</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/courses' className='nav-link' aria-current='page'>Courses</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/testimonial' className='nav-link' aria-current='page'>Testimonial</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/contact' className='nav-link' aria-current='page'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            </>
    );
};

export default Navbar;
