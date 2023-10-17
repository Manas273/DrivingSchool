import '@/styles/testimonial.css';
import ReviewPage from '@/app/testimonial/PostReview';



const Testimonial = () => {
    return (
        <><div className='container-fluid py-2'>
            <h1>What our Clients say</h1>
        </div>
        <div>
                <ReviewPage />
            </div></>
    )


}

export default Testimonial;