
import Link from "next/link"
import Navbar from "./Navbar";
import demo from '@/public/demo.png';
import Image from 'next/image';
import Styles from '@/styles/home.module.css';
import { Component } from "react";
import Footer from "./footer";

const App = () => {
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col">
        <div className={`card ${Styles.card1}`}>
            <div className={`card-body ${Styles.card2}`}>
              Location
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${Styles.card1}`}>
            <div className={`card-body ${Styles.card2}`}>
              7:00 - 18:00
              <br></br>
              Monday to Saturday
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${Styles.card1}`}>
            <div className={`card-body ${Styles.card2}`}>
              Newtruckersacademy@gmail.com
              <br></br>
              403-121-1211
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;