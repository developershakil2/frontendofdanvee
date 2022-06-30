import React from 'react';
import AOS from  'aos'
import 'aos/dist/aos.css';

const SixthSec = () =>{
    AOS.init();
    return(
        <>
        <section id="sixthSec">
        <div className="container">
                <div className="row">
                <div className="col-12 col-md-9 col-lg-9 col-xl-9 left_img">
                                <div className="num_title_mobile">
                                <h5>02</h5>
                                </div>
                                <div className='mobile_top_title'>
                                <p data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">NIGHT OWL</p>
                            <p data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up"  className="s-p2_mobile">MONITORING</p>
                                </div>
                                <img data-aos-offset="300" data-aos-easing="ease-in-sine"   data-aos="zoom-in-up" src="images/monitor.png" alt="team img"/>


                                <div className="id04_mobile">
                                    <p>
                                    I had a blast helping Night Owl establish an effecient and visually
                       appealing experience for users to enjoy their innovation in security.  
                                        
                                        </p>
                                </div>

                     </div>
                     <div className="col-12 col-md-3 col-lg-3 col-xl-3  right_text">
                        <div className="title_number2 ">
                            <h5>02</h5>
                        </div>
                        <div className="right_title">
                            <p  >NIGHT OWL</p>
                            <p >MONITORING</p>
                          
                        </div>

                        <div className="right_para">
                            <p>I had a blast helping</p>
                               <p>Night Owl establish an</p>
                                <p>effecient and visually</p>
                               <p>appealing experience</p> 
                                <p>for users to enjoy their</p>
                                <p>innovation in security.</p>
                        </div>
                     </div>
                     
                    </div>

                    <div className="bottom_cercle_group">
                        <div className="row bottop_wrap">
                            <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                                <div className="mini_wrapper tex-center">
                                    <a href="#">
                                    <img src="images/mini.png" alt='cercle'/>
                                      <span>UX/UI Design</span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                                <div className="mini_wrapper tex-center">
                                    <a href="#">
                                    <img src="images/mini.png" alt='cercle'/>
                                      <span>Branding/Graphics</span>
                                    </a>
                                </div>
                            </div>


                            <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                                <div className="mini_wrapper tex-center">
                                     <a href="#">
                                     <img src="images/mini.png" alt='cercle'/>
                                      <span>Creative Direction</span>
                                     </a>
                                </div>
                            </div>


                            <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                                <div className="mini_wrapper tex-center">
                                     <a href="#">
                                     <img src="images/mini.png" alt='cercle'/>
                                      <span>Development</span>
                                     </a>
                                </div>
                            </div>


                            <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                                <div className="mini_wrapper tex-right">
                                    
                                    <a href="#">
                                    <span>View Project <a href="#"><img style={{marginLeft:'8px' , width:'20px', height:'20px'}} src="images/arrow2.png" alt='cercle'/></a></span>
                                
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}

export default SixthSec;