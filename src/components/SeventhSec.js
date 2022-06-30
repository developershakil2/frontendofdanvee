import React from 'react';
import AOS from  'aos'
import 'aos/dist/aos.css';


const SeventhSec = () =>{
    AOS.init();
    return(
        <>
        <section id="seventSec">

        <div className="container">
                <div className="row">
                     <div className="col-12 col-md-3 col-lg-3 col-xl-3 text-left ">
                        <div className="title_number">
                            <h5>03</h5>
                        </div>
                        <div className="left_title">
                            <p >HUDDLE </p>
                            <p  className="s-p">CORPORATION</p>
                          
                        </div>

                        <div className="left_para">
                            <p>A fresh easy to use</p>
                               <p>design to match Huddle</p>
                                <p>corps success and pro-</p>
                               <p>essionalism was the </p> 
                                <p>the goal and result of this</p>
                                <p>project.</p>
                        </div>
                     </div>
                     <div className="col-12 col-md-9 col-lg-9 col-xl-9 right_img">
                           <img  data-aos-offset="300" data-aos-easing="ease-in-sine"   data-aos="zoom-in-up" src="images/huddle.png" alt="team img"/>

                     </div>
                    </div>
                    <div className="left_para_mobile">
                            <p>A fresh easy to use</p>
                               <p>design to match Huddle</p>
                                <p>corps success and pro-</p>
                               <p>essionalism was the </p> 
                                <p>the goal and result of this</p>
                                <p>project.</p>
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
                                    
                                    <a href="https://huddlecorporation.com/">
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


export default SeventhSec;