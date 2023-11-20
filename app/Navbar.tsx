// // 'use client'
// // import React from 'react';
// // import a from 'next/link';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Nav from 'react-bootstrap/Nav';
// // import Container from 'react-bootstrap/Container';

// // const CNavbar: React.FC = () => {
// //     return (
// //         <Navbar className='navbar navbar-expand-lg header-nav fixed-top'>
// //             <div className='container-fluid'>
// //                 <a className='navbar-brand' href='/'>New Truckers Driving Academy</a>
// //                 <Navbar.Toggle aria-controls='basic-navbar-nav' />
// //                 <Navbar.Collapse id='basic-navbar-nav'>
// //                 <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
// //                              <ul className='navbar-nav ml-auto mb-2 mb-lg-0 gap-3'>
// //                                  <li className='nav-item'>
// //                                      <a href='/' className='nav-link' aria-current='page'>Home</a>
// //                                  </li>
// //                                  <li className='nav-item'>
// //                                      <a href='/about' className='nav-link' aria-current='page'>About</a>
// //                                  </li>
// //                                  <li className='nav-item'>
// //                                      <a href='/courses' className='nav-link' aria-current='page'>Courses</a>
// //                                  </li>
// //                                  <li className='nav-item'>
// //                                      <a href='/testimonial' className='nav-link' aria-current='page'>Testimonial</a>
// //                                  </li>
// //                                  <li className='nav-item'>
// //                                      <a href='/contact' className='nav-link' aria-current='page'>Contact</a>
// //                                  </li>
// //                              </ul>
// //                     </div>
// //                 </Navbar.Collapse>
// //             </div>
// //         </Navbar>
// //     )
// // }

// // export default CNavbar;




// // 'use client'
// // import '@/styles/navbar.css';
// // import React, { useState } from 'react';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Nav from 'react-bootstrap/Nav';
// // import Container from 'react-bootstrap/Container';

// // const CustomNavbar: React.FC = () => {
// //     const [isClick, setisClck] = useState(false);

// //     const toggleNavbar = (): void => {
// //         setisClck(!isClick)
// //     }
// //     return (
// //     <Navbar expand='lg'  className='navbar  header-nav fixed-top'>
// //           <Container>
// //               <Navbar.Brand href="/">New Truckers Driving Academy</Navbar.Brand>
// //               <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //               <Navbar.Collapse id="basic-navbar-nav">
// //                   <Nav className="navbar navbar-expand-lg header-nav">
// //                       <div className='collapse navbar-collapse justify-content-end'>
// //                           <ul className='navbar-nav ml-auto mb-2 mb-lg-0 gap-3'>
// //                               <li className='nav-item'>
// //                                   <a className='nav-link' href="/" >Home</a>
// //                               </li>
// //                               <li className='nav-item'>
// //                                   <a className='nav-link' href="/about">About</a>
// //                               </li>
// //                               <li className='nav-item'>
// //                                   <a className='nav-link' href="/courses">Courses</a>
// //                               </li>
// //                               <li className='nav-item'>
// //                                   <a className='nav-link' href="/testimonial">Testimonial</a>
// //                               </li>
// //                               <li className='nav-item'>
// //                                   <a className='nav-link' href="/contact">Contact</a>
// //                               </li>
// //                           </ul>
// //                       </div>
// //                       <div className='md:hidden flex items-center'>
// //                           <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white
// //                           focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
// //                                 {isClick ? (
// //                                     <svg className='h-6 w-6'
// //                                         xmlns='https://www.w3.org/2000/svg'
// //                                         fill='none'
// //                                         viewBox='0 0 24 24'
// //                                         stroke='currentColor'>
// //                                         <path strokeLinecap='round'
// //                                             strokeLinejoin='round'
// //                                             strokeWidth={2}
// //                                             d='M6 18L18 6M6 6l12 12' />
// //                                         </svg>
// //                                 ) : (
// //                                         <svg className='h-6 w-6'
// //                                             xmlns='https://www.w3.org/2000/svg'
// //                                             fill='none'
// //                                             viewBox='0 0 24 24'
// //                                             stroke='currentColor'
// //                                         >
// //                                             <path strokeLinecap='round'
// //                                                 strokeLinejoin='round'
// //                                                 strokeWidth={2}
// //                                                 d='M4 6h16M4 12h16m-7 6h7'
// //                                             />
// //                                         </svg>
// //                               )}
// //                           </button>
// //                         </div>
// //                         {isClick &&}
// //                   </Nav>
// //               </Navbar.Collapse>
// //           </Container>
// //       </Navbar>
// //   );
// // };

// // export default CustomNavbar;


'use client'
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import '@/styles/navbar.css';


const Navbar = () => {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, []);
    return (
        <>
            <header className='header'>
                <nav className='navbar navbar-expand-lg header-nav fixed-top'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href='/'>New Truckers Driving Academy</a>
                        <button className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
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

// 'use client'
// // import React from 'react';
// // import styled from 'styled-components';

// // const NavbarContainer = styled.nav`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 1rem;
// //   background-color: #333;
// //   color: white;
// // `;

// // const Logo = styled.div`
// //   font-size: 1.5rem;
// //   font-weight: bold;
// // `;

// // const NavLinks = styled.div`
// //   display: flex;
// //   gap: 1rem;

// //   @media (max-width: 600px) {
// //     flex-direction: column;
// //     align-items: flex-end;
// //   }
// // `;

// // const NavLink = styled.a`
// //   text-decoration: none;
// //   color: white;

// //   &:hover {
// //     text-decoration: underline;
// //   }
// // `;

// // const Navbar: React.FC = () => {
// //   return (
// //     <NavbarContainer>
// //       <Logo>New Truckers Driving Academy</Logo>
// //       <NavLinks>
// //         <NavLink href="#">Home</NavLink>
// //         <NavLink href="#">About</NavLink>
// //         <NavLink href="#">Courses</NavLink>
// //         <NavLink href="#">Testimonials</NavLink>
// //         <NavLink href="#">Contact</NavLink>
// //       </NavLinks>
// //     </NavbarContainer>
// //   );
// // };

// // export default Navbar;

// // components/Navbar.tsx
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   background-color: #333;
//   color: white;
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const NavLinks = styled.div<{ isOpen: boolean }>`
//   display: flex;
//   gap: 1rem;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     align-items: flex-end;
//     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//     position: absolute;
//     top: 60px;
//     right: 0;
//     background-color: #333;
//     width: 100%;
//   }
// `;

// const NavLink = styled.a`
//   text-decoration: none;
//   color: white;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const MenuButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 1rem;
//   cursor: pointer;
//   display: none;

//   @media (max-width: 500px) {
//     display: block;
//   }
// `;

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <NavbarContainer>
//       <Logo>New Truckers Driving Academy</Logo>
//       <>
//         <MenuButton onClick={toggleMenu}>Menu</MenuButton>
//         <NavLinks isOpen={isOpen}>
//           <NavLink href="#">Home</NavLink>
//           <NavLink href="#">About</NavLink>
//           <NavLink href="#">Courses</NavLink>
//           <NavLink href="#">Testimonials</NavLink>
//           <NavLink href="#">Contact</NavLink>
//         </NavLinks>
//       </>
//     </NavbarContainer>
//   );
// };

// export default Navbar;



// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// function NavBar() {
//     const [navbar, setNavbar] = useState(false);
//     return (
//         <div>
//             <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
//                 <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
//                     <div>
//                         <div className='flex items-center justify-between py-3 md:py-5 md:block'>
//                             <Link href='/'>
//                                 <h2 className='text-2xl font-bold'>New Truckers Driving Academy</h2>
//                             </Link>
//                             <div className='md:hidden'>
//                                 <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
//                                     onClick={() => setNavbar(!navbar)}>
//                                     {navbar ? (
//                                         <Image src='x.svg'
//                                         width={30}
//                                             height={30}
//                                             alt='logo' />) :
//                                         (
//                                         <Image src='list.svg'
//                                             width={30}
//                                             height={30}
//                                             alt='logo'
//                                         className='focus:border-none active:border-none'/>

//                                 )}
                                    
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                     <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? 'p-12 md:p-0 block' : 'hidden' }`}>
//               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
//                 <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/" onClick={() => setNavbar(!navbar)}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/about" onClick={() => setNavbar(!navbar)}>
//                     About
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/courses" onClick={() => setNavbar(!navbar)}>
//                     Courses
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/testimonial" onClick={() => setNavbar(!navbar)}>
//                     Testimonial
//                   </Link>
//                 </li>                
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/contact" onClick={() => setNavbar(!navbar)}>
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         </nav>
//         </div >
//     );
// }

// export default NavBar

