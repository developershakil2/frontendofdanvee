import React from 'react';

const ProjectSec = () =>{

    return(
        <>
        <section id="projectSec">

        <div className="container">
                <div className="row">
                     <div className="col-12 col-md-3 col-lg-3 col-xl-3 text-left ">
                        <div className="title_number">
                            <h5>07</h5>
                        </div>
                        <div className="left_title">
                            <p >YOUR </p>
                            <p   className="s-p">PROJECT</p>
                          
                        </div>

                        <div className="left_para">
                            <p>Will your project be my</p>
                               <p>next project? i'd love to</p>
                                <p> collabarate with you and</p>
                               <p>make your idease come</p> 
                                <p> to life :)</p>
                                
                        </div>
                     </div>
                     <div id="borderi" className="col-12 col-md-9 col-lg-9 col-xl-9 right_img">
                           <img src="images/projectF.png" alt="team img"/>
                           <img  id="smile" src="images/smile.png" alt="team img"/>

                     </div>
                    </div>
                    <div className="left_para_mobile">
                            <p>Will your project be my</p>
                               <p>next project? i'd love to</p>
                                <p> collabarate with you and</p>
                               <p>make your idease come</p> 
                                <p> to life :)</p>
                                
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

export default ProjectSec;