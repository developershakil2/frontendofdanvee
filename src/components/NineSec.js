import React from 'react';
import AOS from  'aos'
import 'aos/dist/aos.css';


const NineSec = ()=>{
    AOS.init();
    return(
        <>
        <section id="nine">
        <div className="container">
                <div className="row">
                     <div className="col-12 col-md-3 col-lg-3 col-xl-3 text-left ">
                        <div className="title_number">
                            <h5>05</h5>
                        </div>
                        <div className="left_title">
                            <p data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">NOMAD </p>
                            <p  data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up" className="s-p">SURF CO</p>
                          
                        </div>

                        <div className="left_para">
                            <p>This was a rad project</p>
                               <p>to reckoned with. I de- </p>
                                <p> signed a new UX/UI to</p>
                               <p>help Nomad crush on- </p> 
                                <p> line sale</p>
                                
                        </div>
                     </div>
                     <div className="col-12 col-md-9 col-lg-9 col-xl-9 right_img">
                           <img data-aos-offset="300" data-aos-easing="ease-in-sine"   data-aos="zoom-in-up" src="images/surf.png" alt="team img"/>

                     </div>
                    </div>
                    <div className="left_para_mobile">
                            <p>This was a rad project</p>
                               <p>to reckoned with. I de- </p>
                                <p> signed a new UX/UI to</p>
                               <p>help Nomad crush on- </p> 
                                <p> line sale</p>
                                
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
                                    <span>Coming Sep 2022 </span>
                                
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

export default NineSec;