import React from 'react';

import AOS from  'aos'
import 'aos/dist/aos.css';
const EightSec = () =>{
    AOS.init();
    return(
        <>
        <section id="eightSect">

        <div className="container">
                <div className="row">
                <div className="col-12 col-md-9 col-lg-9 col-xl-9 left_img">
                <div className="num_title_mobile">
                                <h5>04</h5>
                                </div>
                                <div className='mobile_top_title'>
                                <p>WEB DEV</p>
                            <p  className="s-p2_mobile">OFFICIAL</p>
                                </div>
                           <img data-aos-offset="300" data-aos-easing="ease-in-sine"   data-aos="zoom-in-up" src="images/web.png" alt="team img"/>
                           <div className="id04_mobile">
                                    <p>
                                    Creativity and empathy
fueled my approach to rebrand for WDO’s online community of over 150k developers.
                                        
                                        </p>
                                </div>

                     </div>
                     <div className="col-12 col-md-3 col-lg-3 col-xl-3  right_text">
                        <div className="title_number2 ">
                            <h5>04</h5>
                        </div>
                        <div className="right_title">
                            <p>WEB DEV</p>
                            <p  className="s-p2">OFFICIAL</p>
                          
                        </div>

                        <div className="right_para">
                            <p>Creativity and empathy</p>
                               <p>ueled my approach</p>
                                <p>to rebrand for WDO’s</p>
                               <p>online community of</p> 
                                <p>online community of</p>
                                <p>over 150k developers.</p>
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
                                    
                                    <a href="https://www.instagram.com/webdevofficial/">
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

export default EightSec;