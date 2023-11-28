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
                        <footer className='blockquote-footer'><b>Jasmeet Singh, Calgary, AB. Passed on August 2 2023</b></footer>
                    </blockquote>
                </div>
            </div>
        </div>
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-6 mb-4">
                        <div className='card'>
                            <img src='testimonial3.jpeg' alt='image' className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p>"Under Dev's expert guidance, I passed my exam on the first attempt.
                                        His hands-on approach, focus on safety, and commitment to success make this school the best choice for anyone aspiring to become a skilled and confident truck driver. Highly recommend!"</p>
                                    <footer className='blockquote-footer'><b>Gurpreet Singh, Grand Prairie, AB. Passed on November 23 2023</b></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            <img src='testimonial2.jpeg' alt='image' className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p>"New Truckers Driving Academy in Calgary is the best choice. Traveling from Grand Prairie, Me and Devinder found the instructor to be excellent and the training to be top-notch.
                                        If you want your licence quickly, this school is the best choice."</p>
                                    <footer className='blockquote-footer'><b>Devinder Singh and Mandeep Brar, Grand Prairie, AB. Passed on July 19 2023</b></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            <img src='testimonial5.jpeg' alt='image' className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p>"I recently completed my training at New Truckers Driving Academy, and I can confidently say that it was a transformative experience that exceeded all my expectations.
                                        Dev, our instructor, played a pivotal role in making this journey not only educational but also enjoyable."</p>
                                    <footer className='blockquote-footer'><b>Rohitbeer Singh, Calgary, AB. Passed on July 28 2023</b></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            <img src='testimonial4.jpeg' alt='image' className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p>"Dev's expertise and hands-on training were instrumental in my first-attempt success. His dedication to safety and personalized guidance make this school stand out.
                                        For a top-tier education and a smooth road to success, choose New Truckers Driving Academy."</p>
                                    <footer className='blockquote-footer'><b>Sajanpreet Singh, Calgary, AB. Passed on November 14 2023</b></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className='card'>
                            <div className='card-body'>
                                <blockquote className='card-text'>
                                    <p>"New Truckers Driving Academy is great, Dev is very knowledgeable and took the time to help no matter what the situation is and treats you like family.
                                        I couldn't have asked for anyone better to teach me. I am really happy with the outcome and couldn't be more happy."</p>
                                    <footer className='blockquote-footer'><b>Jasmeet Kaur, Calgary, AB. Passed on November 6 2023</b></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>


    )

}

export default Testimonial;