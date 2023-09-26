import demo from "@/public/demo.png";
import logo3 from '@/public/logo3.png';
import  '@/styles/about.css';

const About = () => {
    return (
        <><div className='d-flex justify-center'>
            <img className='m-auto p-4' src={logo3.src} style={{ width: '670px', height: 'auto' }}></img>
            </div>
            <div className='p-5 container'>
                <h1>Welcome to New Truckers Academy</h1>
                <h5>-Your Gateway to Professional Trucking in Calgary!</h5>
                <p>Welcome to the New Truckers Driving Academy, Calgary's premier destination for top-notch truck driver training. Located in the heart of this vibrant city, our brand-new driving school is committed to empowering individuals with the skills and knowledge needed to embark on a successful career in the trucking industry.</p>
                <h2><u>Why New Truckers Academy ?</u></h2>
                
                    <div className='card-body'>
                        We believe in learning in a modern, comfortable environment. Our facility boasts cutting-edge classrooms and a well-maintained training yard, ensuring that students receive top-quality education.
                        Our comprehensive training programs cover all aspects of truck driving, from essential theory and safety practices to hands-on practical experience behind the wheel. We equip our students with the skills needed to excel in the industry.
                        We're dedicated not only to your education but also to your career success.
                        Quality education shouldn't come at an exorbitant cost. We offer competitive tuition rates and various financing options to make our programs accessible to aspiring truckers.
                        Safety is our utmost priority. We instill a culture of safety in all our students, ensuring that they are well-prepared to navigate the challenges of the road responsibly.
                </div>
                <h2><u>Our Services</u></h2>
                <div className='card shadow border-dark'>
                    <div className='card-body'>
                    <ul>-  We've been officially licensed and approved by the Alberta Ministry of Transportation.</ul>
                    <ul>-  Our lessons are scheduled to suit our students' preferences.</ul>
                    <ul>-  Completion of our courses with success is our primary goal for every driver.</ul>
                    <ul>-  We can communicate effectively in English, Hindi, Punjabi and Urdu.</ul>
                    <ul>-  Our instructors are seasoned professionals, each having taught for more than ten years.</ul>
                    </div>
                    </div>
                <h2><u>Your Journey Starts Here</u></h2>
                <div className='card'>
                    <div className='card-body'>
                    At New Truckers Driving Academy, we're not just a school, we're a community dedicated to your success. Whether you're a complete beginner or an experienced driver seeking to upgrade your skills, our doors are open to you.
                    Join us in Calgary, where the mountains meet the prairies, and embark on a rewarding career in the trucking industry. Experience the thrill of the open road while enjoying the stability and opportunities that come with a career as a professional truck driver.
                    Contact us today to learn more about our courses, enrollment options, and how we can help you turn your trucking dreams into reality. At New Truckers Driving Academy, your journey to becoming a skilled and confident truck driver begins now!
                    </div>
                    </div>
            </div></>
    );
};

export default About;