
import '@/styles/footer.css';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className='footer-07'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-12 text-center'>
                        <h2 className='footer-heading'>New Truckers Driving Academy</h2>
                        <div className='menu'>
                            <Link href='/home'><u>Home</u></Link>
                            <Link href='/about'><u>About</u></Link>
                            <Link href='/courses'><u>Courses</u></Link>
                            <Link href='/testimonial'><u>Testimonial</u></Link>
                            <Link href='/contact'><u>Contact</u></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        
        
        
        
        
        
        
        </footer>
     )
}
    
    export default Footer;
