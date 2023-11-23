import "@/styles/testimonial.css";


const Testimonial = () => {
    return (
        <><div className='container mt-1'>
            <h1><u>Look at what our clients say</u></h1>
            <p>At New Truckers Academy, we take immense pride in our commitment to providing top-notch training and education for aspiring truck drivers.
                But don't just take our word for it – hear what our students have to say! Our testimonial page features stories of determination, hard work, and personal growth, as shared by our dedicated students.
                From seasoned truckers looking to enhance their skills to newcomers entering the world of trucking, we've had the privilege of helping individuals from all walks of life embark on their exciting journey in the trucking industry.</p>
            <div className='card'>
                <div className="embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item img-fluid" controls style={{ width: '950px', height: '400px', justifyContent:'center'}}>
                        <source src="testimonial1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='card-body'>
                    <blockquote className='card-text'>
                        <p></p>
                        <footer className='blockquote-footer'></footer>
                    </blockquote>
                </div>
            </div>
        </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            {/* <img src='demo1.png' alt='image' className='card-img-top' /> */}
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p>"New Truckers Driving Academy is great, Dev is very knowledgeable and took the time to help no matter what the situation is and treats you like family.
                                        I couldn't have asked for anyone better to teach me. I am really happy with the outcome and couldn't be more happy."</p>
                                    <footer className='blockquote-footer'>Jasmeet Kaur, November 6 2023</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            <img src='testimonial2.png' alt='image' className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p></p>
                                    <footer className='blockquote-footer'></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            <img src='testimonial3.png' alt='image' className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p></p>
                                    <footer className='blockquote-footer'></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            <img src='demo1.png' alt='image' className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p>A well-known quote, contained in a blockquote element</p>
                                    <footer className='blockquote-footer'>Someone Famous</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>


    )

}

export default Testimonial;