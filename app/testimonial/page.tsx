import "@/styles/testimonial.css";



const Testimonial = () => {
    return (
        <div className='container'>
            <h1><u>Look at what our clients say</u></h1>
            <p>At New Truckers Academy, we take immense pride in our commitment to providing top-notch training and education for aspiring truck drivers.
                But don't just take our word for it – hear what our students have to say! Our testimonial page features stories of determination, hard work, and personal growth, as shared by our dedicated students.
                From seasoned truckers looking to enhance their skills to newcomers entering the world of trucking, we've had the privilege of helping individuals from all walks of life embark on their exciting journey in the trucking industry.</p>
            <div className='card'>
                    <img src='demo1.png' alt='image' className='card-img-top' />
                <div className='card-body'>
                    <blockquote className='card-text'>
                        <p>A well-known quote, contained in a blockquote element</p>
                        <footer className='blockquote-footer'>Someone Famous</footer>
                    </blockquote>
                </div>
            </div>
            <div className='card'>
                    <img src='demo2.png' alt='image' className='card-img-top' />
                <div className='card-body'>
                    <blockquote className='card-text'>
                        <p>A well-known quote, contained in a blockquote element</p>
                        <footer className='blockquote-footer'>Someone Famous</footer>
                    </blockquote>
                </div>
            </div>
            <div className='card'>
                    <img src='demo3.png' alt='image' className='card-img-top' />
                <div className='card-body'>
                    <blockquote className='card-text'>
                        <p>A well-known quote, contained in a blockquote element</p>
                        <footer className='blockquote-footer'>Someone Famous</footer>
                    </blockquote>
                </div>
            </div>
            <div className='card'>
                    <img src='demo2.png' alt='image' className='card-img-top' />
                <div className='card-body'>
                    <blockquote className='card-text'>
                        <p>A well-known quote, contained in a blockquote element</p>
                        <footer className='blockquote-footer'>Someone Famous</footer>
                    </blockquote>
                </div>
            </div>
            <div className='card'>
                    <img src='demo1.png' alt='image' className='card-img-top' />
                <div className='card-body'>
                    <blockquote className='card-text'>
                        <p>A well-known quote, contained in a blockquote element</p>
                        <footer className='blockquote-footer'>Someone Famous</footer>
                    </blockquote>
                </div>
            </div>
        </div>


    )

}

export default Testimonial;