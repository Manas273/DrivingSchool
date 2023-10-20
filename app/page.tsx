
import Link from "next/link"
import Navbar from "./Navbar";
import demo from '@/public/demo.png';
import Image from 'next/image';
import '@/styles/home.css';
import { Component } from "react";
import Footer from "./footer";

const App = () => {
  return (
      <div className='container p-5'>
        <div className="row">
          <div className="col">
            <div className='card card1' id="location">
              <div className='card-body card2'>
                <a href="https://maps.app.goo.gl/gxQ74xAKekKeymuQA">7320 40 Street NE
                  <br></br>
                  <br></br>
                  Calgary AB T3J 4E6</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card card1'>
              <div className='card-body card2'>
                7:00 - 18:00
                <br></br>
                <br></br>
                Monday to Saturday
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card card1' id="contact">
              <div className='card-body card2'>
                <a href="/contact">
                  newtruckersdrivingacademy@gmail.com
                  <br></br>
                  <br></br>
                  403-604-2084</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;

