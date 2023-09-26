import Postform from '@/app/contact/PostForm';
import '@/styles/forms.module.css';

const Contact = () => {
    return (
        
    <div className='container-fluid py-3'>
            <h1>Let's Drive together</h1>
            <p>Now that you know we can help, we would love to know more about your driving goals.</p>
            <div className='card'>
                <div className='card-body'>
                    How can we assist you today? Please fill out the contact form below.
                    <br></br>
                    Email us at : 
                    <br></br>
                Phone/Text us at: 
            </div>
            </div>
                At, New Truckers Academy, we are devoted to offer customized lessons and first rate customer service. So, buckle up and contact us so that we can help you conquer roads.
    <div className='text-center'>
    <h2>Contact Us</h2>
    </div>    
        <div>
          <Postform />  
            </div>
        </div>
    );
};

export default Contact;
