
import Styles from '@/styles/courses.module.css';
import head from '@/public/Courses.png';


const Courses = () => {
    return (
            <div className='d-flex justify-center py-5'>
                <div className='row m-auto'>
                    <div className='col-md-6 mb-4'>
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
                    <div className='col-md-6 mb-4'>
                            <div className={`card ${Styles.card1}`}>
                                <div className='card-body'>
                                    <div className={`card-title ${Styles.cardhead}`}>
                                        Class 3 
                                </div>
                                <div className='line'>
                                    --------------------------------------------
                                </div>
                                    <div className='card-text'>
                                <ul> - 30 hours</ul>
                                <ul> - 20 hours</ul>
                                <ul> - 10 hours</ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Courses;