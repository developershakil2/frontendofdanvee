import React, {useEffect , useRef, useState} from 'react';


const FifthSec = () =>{
    
   
    // AOS.init();



    return(
        <>
        

        <section   id="fifth_sec">
            <div className="container">
                <div className="row">
                     <div className="col-12 col-md-3 col-lg-3 col-xl-3 text-left ">
                        <div className="title_number">
                            <h5>01</h5>
                        </div>
                        <div className="left_title" >
                            <p >TE<span>A</span>M LILLARD</p>
                            <p className="s-p" >SPORTS</p>
                          
                        </div>

                        <div className="left_para">
                            <p>Created for NBA All Star</p>
                               <p> Damian Lillard and his</p>
                                <p>foundation while I was</p>
                               <p>working at NS Modern </p> 
                                <p>in 2019.</p>
                        </div>
                     </div>
                     <div className="col-12 col-md-9 col-lg-9 col-xl-9 right_img">
                           <img  data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up" src="images/team_img.png" alt="team img"/>

                     </div>
                    </div>
                    <div className="left_para_mobile">
                            <p>Created for NBA All Star</p>
                               <p> Damian Lillard and his</p>
                                <p>foundation while I was</p>
                               <p>working at NS Modern </p> 
                                <p>in 2019.</p>
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
                                    
                                    <a href="https://thelillardfoundation.org/">
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

export default  FifthSec;