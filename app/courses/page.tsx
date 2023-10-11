
import Styles from '@/styles/courses.module.css';
import head from '@/public/Courses.png';


const Courses = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <div className={`card ${Styles.card1}`}>
                        <div className="card-body">
                            <h5 className={`card-title ${Styles.cardhead}`}>
                                Class 1</h5>
                    </div>
                </div>
            </div>
                <div className="col-md-3">
                    <div className={`card ${Styles.card1}`}>
                        <div className="card-body">
                            <h5 className={`card-title ${Styles.cardhead}`}>
                                Class 3 </h5>
                    </div>
                </div>
            </div>
                <div className="col-md-3">
                    <div className={`card ${Styles.card1}`}>
                        <div className="card-body">
                            <h5 className={`card-title ${Styles.cardhead}`}>
                                Brush Up </h5>
                    </div>
                </div>
            </div>
                <div className="col-md-3">
                    <div className={`card ${Styles.card1}`}>
                        <div className="card-body">
                            <h5 className={`card-title ${Styles.cardhead}`}>
                                Air Brake </h5>
                        <p className="card-text">Coming Soon</p>
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