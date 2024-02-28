import React from "react";
import '@/styles/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h1>New Truckers Driving Academy</h1>
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <a href='/'><h5>Home</h5></a>
                        <a href='/about'><h5>About</h5></a>
                        <a href='/course'><h5>Courses</h5></a>
                        <a href='/testimonial'><h5>Testimonial</h5></a>
                        <a href='/contact'><h5>Contact</h5></a>
                    </div>
                    <div className="sb_footer-links_div">
                        <div className="socialmedia">
                            <p><a href="https://www.facebook.com/profile.php?id=61555074615346">
                                <img src='fb.png' alt="/"></img></a></p>
                            <p><a href="https://www.instagram.com/newtruckersdrivingacademy/">
                                <img src='insta.png' alt="/"></img></a></p>
                            <p><img src='tiktok.png' alt="/"></img></p>
                            
                        </div>

                    </div>
                    <hr></hr>
                    <div className="sb_footer-below">
                        <div className="sb_footer-copyright">
                            <p>
                            ©{new Date().getFullYear()} New Truckers Driving Academy. All right reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;