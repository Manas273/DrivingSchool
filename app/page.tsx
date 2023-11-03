'use client'
import Link from "next/link"
import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import demo from '@/public/demo.png';
import Image from 'next/image';
import '@/styles/home.css';
import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
      <div className="imageContainer">
        <img src="demo.png" alt="Image 1" />
      </div>
      <div className="imageContainer">
        <img src="logo3.png" alt="Image 2" />
      </div>
      <div className="imageContainer">
        <img src="navlogo.png" alt="Image 3" />
      </div>
    </Carousel>
      <div className='container p-5'>
        <div className="row">
          <div className="col">
            <a href="https://maps.app.goo.gl/gxQ74xAKekKeymuQA" className='card cursor-pointer card1' id="location">
              <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-geo-alt-fill navIcon" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className='card-body card2'>
                <div>7320 40 Street NE
                  <br></br>
                  Calgary AB T3J 4E6</div>
              </div>
            </a>
          </div>
          <div className="col">
            <div className='card card1'>
              <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clock-fill clockIcon" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
              </div>
              <div className='card-body card2'>
                8:00 - 18:30
                <br></br>
                Monday to Saturday
              </div>
            </div>
          </div>
          <div className="col">
            <a href="/contact" className='card cursor-pointer card1' id="contact">
              <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope-check-fill emailIcon" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                </svg>
                <i className="bi bi-envelope-check-fill"></i>
              </div>
              <div className='card-body card3'>
                <div>
                  newtruckersdrivingacademy@gmail.com
                  <br></br>
                  403-604-2084</div>
              </div>
            </a>
          </div>
        </div>
      </div></>
  );
};


export default App;
