
import '@/styles/courses.css';
import head from '@/public/Courses.png';


const Courses = () => {
    return (
        <div className='container'>
            <h1><u>Courses</u></h1>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card mb-4 card1'>
                        <div className='card-body'>
                            <div className='card-title cardhead'>
                                CLASS 1 MELT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card mb-4 card2'>
                        <div className='card-body'>
                            <div className='card-title cardhead' >
                                CLASS 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card mb-4 card3'>
                        <div className='card-body'>
                            <div className='card-title cardhead' >
                                Brush Up 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card mb-5 card4'>
                        <div className='card-body'>
                            <div className='card-title cardhead'>
                                Air Brakes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      );
};
                {/* <div className='row justify-content-start'>
                    <div className='col md-4 mb-4'>
                        <div className={`card ${Styles.card1}`}>
                            <div className='card-body'>
                            <div className={`card-title ${Styles.cardhead}`}>
                                    Class 1 MELT
                                </div>
                                <div className='line'>
                                    --------------------------------------------
                                </div>
                                <div className='card-text'>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col md-8 mb-4'>
                            <div className={`card ${Styles.card1}`}>
                                <div className='card-body'>
                                    <div className={`card-title ${Styles.cardhead}`}>
                                        Class 3 
                                </div>
                                <div className='line'>
                                    --------------------------------------------
                                </div>
                                    <div className='card-text'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

export default Courses;