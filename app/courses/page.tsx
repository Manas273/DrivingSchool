import '@/styles/courses.css';


const Courses = () => {
    return (
        <div className='container mt-4'>
            <div className='headingcontainer'>
            <h1><u>Courses</u></h1>
            <div className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-truck slidingIcon" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                </div>
            </div>
            <div className='pageend'>
                Our range of courses covers everything from the fundamentals of commercial driving to specialized training in various types of trucks, including tractor-trailers and heavy-duty vehicles. With a strong emphasis on safety, regulations, and practical skills, our expert instructors will guide you through the process of becoming a confident and responsible truck driver.
            </div>
            <div className='row justify-content-center p-2'>
                <div className='col-md-6'>
                    <div className='card mb-4 card1'>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='cardhead'>
                                    <u><strong>CLASS 1 MELT - 113 Hours</strong></u>
                            </div>
                                <div className='cardprice'>
                                    <strong>$9000 + GST</strong>
                                </div>
                            </div>
                            <div className='card-text cardcontent'>
                                <li>40.5 hours of classroom Instruction.
                                    <br></br>
                                    Monday-Friday : 8:00 A.M.- 4:30 P.M.
                                </li>
                                <br></br>
                                <li>39 hours of ONE-ON-ONE Driving
                                    <br></br>
                                    Monday-Saturday : 8:00 A.M. - 6:30 P.M.
                                </li>
                                <br></br>
                                <li>18 hours of Back-up (Parking)
                                    <br></br>
                                    Monday-Saturday : 8:00 A.M. - 6:30 P.M.
                                </li>
                                <br></br>
                                <li>15.5 hours Pre-Trip (In Yard)
                                    <br></br>
                                Monday-Saturday : 8:00 A.M. - 6:30 P.M.
                                </li>
                                <br></br>
                                <li>
                                    Also includes truck rental for <u>2</u> Road Tests.
                                </li>
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
                                <u><strong>CLASS 3</strong></u>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='cardcontent'>
                                    <li>30 Hours Driving - <strong>$2700 + GST</strong></li><br></br>
                                    <li>20 Hours Driving - <strong>$1900 + GST</strong></li><br></br>
                                    <li>10 Hours Driving - <strong>$1000 + GST</strong></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card mb-4 card3'>
                        <div className='card-body'>
                            <div className='card-title cardhead'>
                                <u><strong>Brush Up</strong></u> 
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                            <div className='cardcontent'>
                            <li>2 Hours Brush-Up Lessons Class 1 - <strong>$180 + GST</strong> </li><br></br>
                            <li>2 Hours Brush-Up Lessons Class 3 - <strong>$200 + GST</strong></li>
                                </div>
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
                                <u><strong>Air Brakes</strong></u>
                            </div>
                            <div className='cardcontent1'>
                                COMING SOON
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex p-4'>
            <div className='pageend'>
                Ready to take your road test? We've got you covered!
                At New Truckers Driving Academy, not only do we provide top-notch training, but we also offer truck rentals for your road test,
                making it even more convenient for you to achieve your Class 1 or Class 3 licence.
                </div>
                <br></br>
                <li className='cardcontent2'><u><strong>Truck Rental for Road Test for 2 hours - $200 + GST</strong></u></li>
                </div>
        </div>


      );
};
                //  <div className='row justify-content-start'>
                //     <div className='col md-4 mb-4'>
                //         <div className={`card ${Styles.card1}`}>
                //             <div className='card-body'>
                //             <div className={`card-title ${Styles.cardhead}`}>
                //                     Class 1 MELT
                //                 </div>
                //                 <div className='line'>
                //                     --------------------------------------------
                //                 </div>
                //                 <div className='card-text'>
                                
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                //     <div className='col md-8 mb-4'>
                //             <div className={`card ${Styles.card1}`}>
                //                 <div className='card-body'>
                //                     <div className={`card-title ${Styles.cardhead}`}>
                //                         Class 3 
                //                 </div>
                //                 <div className='line'>
                //                     --------------------------------------------
                //                 </div>
                //                     <div className='card-text'>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div> 

export default Courses;