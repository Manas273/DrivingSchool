import Link from "next/link"
import Navbar from "./Navbar";
import demo from '@/public/demo.png';
import Image from 'next/image';
import Styles from '@/styles/home.module.css';


const App = () => {
  return (
    <>
      <div className='d-flex justify-center'>
        <img className='m-auto' src={demo.src} style={{ width: '670px', height: 'auto'}}></img>
      </div>
    </>
  );
};

export default App;