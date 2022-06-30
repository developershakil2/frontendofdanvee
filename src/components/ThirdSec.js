import React from 'react';
import AOS from  'aos'
import 'aos/dist/aos.css';
const ThirdSec = () =>{
    AOS.init();

    return(
        <>
        <section id="thirdSec">
            <div className="container">
                <div  id="third_sec_content" className="text-center">
                    <h2 data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">100<span>+</span></h2>
                    <h4 >PROJECTS</h4>
                </div>
            </div>
        </section>
        
        </>
    )
}


export default ThirdSec;