import '@/styles/testimonial.css';



const Testimonial = () => {
    return (
        <div className='container'>
            <h1><u>What our Client says</u></h1>
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