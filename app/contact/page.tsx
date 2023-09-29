import Postform from '@/app/contact/PostForm';
import '@/styles/form.css';

const Contact = () => {
    return (
        
    <div className='container-fluid py-3'>
            <h1>Let's Drive together</h1>
            <p>Now that you know we can help, we would love to know more about your driving goals.
                <br></br>How can we assist you today? Please fill out the contact form below.
            </p>
            <div className='container'>
                <div className='row justify-content-start'>
                    <div className='col md-6'>
            <div className='card shadow custom-width'>
                <div className='card-body'>
                    Email us at :  
                    <br></br>
                    <br></br>
                Phone/Text us at:  
            </div>
                        </div>
                    </div>
                    </div>
            </div>
                <p>At, New Truckers Academy, we are devoted to offer customized lessons and first rate customer service. So, buckle up and contact us so that we can help you conquer roads.</p>
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
