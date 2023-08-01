import React from 'react';
import navlogo from '@/public/navlogo.png';
import Image from 'next/image';
import Styles from '@/styles/navbar.module.css';
import Link from 'next/link';



const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <div className='container-fluid align-items-end'>
                <Image src={navlogo.src} alt="logo" width={200} height={90}></Image>
                <div className='text-light'>...Saving Lives through better education
                    </div>
                <div className='d-flex gap-3'>
                    <div>
                        <Link href='/home'> <button type="button" className="btn btn-outline-light">Home</button> </Link>
                    </div>
                    <div>
                        <Link href='/about'> <button type="button" className="btn btn-outline-light">About</button></Link>
                    </div>
                    <div>
                            <Link href='/courses'><button type="button" className="btn btn-outline-light"> Courses</button></Link>
                    </div>
                    <div>
                            <Link href='/contact'> <button type="button" className="btn btn-outline-light">Contact </button></Link>
                    </div>
                </div>
            </div>
        </nav> 
    );
};

export default Navbar;
