import React from 'react';
import AOS from  'aos'
import 'aos/dist/aos.css';

const TenSec = () =>{
    AOS.init();
    return(
        <>
        <section id="TenSec">

        <div className="container">
                <div className="row">
                <div className="col-12 col-md-9 col-lg-9 col-xl-9 left_img">


                <div className="num_title_mobile">
                                <h5>06</h5>
                                </div>
                                <div className='mobile_top_title'>
                                <p data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">RUBBER</p>
                            <p   className="s-p2_mobile" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">RECOURCE</p>
                                </div>
                           <img data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up" src="images/rubber.png" alt="team img"/>


                           <div className="id04_mobile">
                                    <p>
                                    This was a story of modern-ization. From the logo to UI design, I enjoyed the challenge to create a future proof experience for RR. 
                                        
                                        </p>
                                </div>

                     </div>
                     <div className="col-12 col-md-3 col-lg-3 col-xl-3  right_text">
                        <div className="title_number2 ">
                            <h5>06</h5>
                        </div>
                        <div className="right_title">
                            <p data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">RUBBER</p>
                            <p  className="s-p2" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">RECOURCE</p>
                          
                        </div>

                        <div className="right_para">
                            <p>This was a story of</p>
                               <p>modernization. From</p>
                                <p>the logo UI design, I</p>
                               <p> enjoyed the challenge</p> 
                                <p>to create a future proof</p>
                                <p>experience for RR.</p>
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
                                    
                                    <a href="https://rubberresource.com/">
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

export default TenSec;