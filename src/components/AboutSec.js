import React from 'react';
// import AOS from  'aos'
// import 'aos/dist/aos.css';

const AboutSec = () =>{

    return(
        <>
        <section id="aboutSec">
        <div id="fourth_sect_title">
              <h4>A bit about me</h4>
                <img src="images/arrow1.png" alt="arrow"/>
                  </div>




                  <div className="container mt-5 pt-5">
                             <h2 id="abouti">ABOUT DAN</h2>


                             <div id="about_wrapp" className="row mt-5 ">
                                 <div className="col-12 col-md-6 col-lg-6 col-xl-6 wrap_box_about">
                                     <img data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up" id="smile2" src="images/smile2.png" alt="smile"/>

                                       <img id="danVee" data-aos-offset="400" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up" src="images/van2.png" alt="dan ven"/>

                                       <div id="about_para_group" data-aos="zoom-out-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                       <p>A few things I enjoy are playing and wathing sports</p>
                                     <p>hanging out with my friends and family, trying new foods,</p>
                                     <p>exploring the outdoors and traveling with my wife. the pic</p>
                                     <p>above is my wife and I being goofy and to right is us at Mt</p>
                                     <p>Everest Base Camp with our friends in 2021 {`:)`}</p>

                                       </div>

                                 </div>
                                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 wrap_box_about_text">
                                     <div id="wrap_id02" data-aos="zoom-out-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                     <p>I was born in Salem, Oregon and grew up in</p>
                                     <p>Portland, Oregon where I gained my love for design.</p>
                                     <p>Since a small age my favorite subjects in school</p>
                                     <p>were math and art Math for the problem solving,</p>
                                     <p>and art for the creativity. Both of which , I belive are</p>
                                     <p>essential for meaningful design. i have my BA degree</p>
                                     <p>from TU university and enjoy constant learning and</p>
                                     <p>improving myself and my work</p>
                                     </div>
                                       <div id="wrap_id02_mobile">
                                         <p data-aos="zoom-out-up" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                         I was born in Salem, Oregon and grew up in  Portland, Oregon where I gained my love for design.  Since a small age my favorite subjects in school  were math and art Math for the problem solving,  and art for the creativity. Both of which , I belive are  essential for meaningful design. i have my BA degree  from TU university and enjoy constant learning and  improving myself and my work
                                         </p>
                                       </div>
                                     <img data-aos-offset="400" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up" id="ev" src="images/ev.png" alt="ev"/>
                                     <img data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up" id="mount" src="images/mount.png" alt="mount"/>
                                        
                                       <div className="wrap_ab_mobile">
                                       <p data-aos="zoom-out-up" data-aos-offset="300" data-aos-easing="ease-in-sine">A few things I enjoy are playing and watching sports, hanging out with friends and family, trying new foods, exploring the outdoors and traveling with my wife. As a couple we commit ourselves to weekly volunteer work to enjoy the kind of happiness that only comes from giving. The 1st pic  is my wife and I being goofy and the 2nd is us at Mt. Everest Base Camp with our friends in 2021 :)</p>
                                 
                                       </div>
                                 
                                 </div>
                             </div>
                  </div>
        </section>
        
        </>
    )
}

export default AboutSec;