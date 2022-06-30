import React from 'react';
import Header from './components/Header';
import SecondSec from './components/SecondSect';
import ThirdSec from './components/ThirdSec';
import FourthSec from './components/FourthSec';
import FifthSec from './components/FifthSect';
import SixthSec from './components/SixthSec';
import SeventhSec from './components/SeventhSec';
import EightSec from './components/EightSec';
import NineSec from './components/NineSec';
import TenSec from './components/TenSec';
import ClientSec from './components/ClientSec';
import NextSec from './components/NextSection';
import ProjectSec from './components/PojectSec';
import TwSec from './components/TwSec';
import Expertise from './components/Expertise';
import AboutSec from './components/AboutSec';
import ContactSec from './components/ContactSec';
import Footer from './components/Footer';
import AOS from  'aos'
import 'aos/dist/aos.css';




const Home= ()=>{
    AOS.init();
    return(
        <>
        <Header/>
        <div className="">
        <div id="main_title1">
            <h1  data-aos-offset="400" data-aos-easing="ease-in-sine"  data-aos="zoom-out-up">UX/UI DESIGNER</h1>

        </div>
        <div id="second_main_title">
            <h1>CREATIVE DIRECTOR</h1>
          
            <div id="hero_img" className="text-center">
            <img id="van" src="images/van.png" alt="van img"/>
            <div id="cercle_group">
           <img src='images/cercle1.png' className="cercle" id="cercle1" alt="cercle png"/>
            <img src='images/cercle2.png' className="cercle" id="cercle2" alt="cercle png"/> 
            <img src='images/cercle3.png' className="cercle" id="cercle3" alt="cercle png"/>
            <img src='images/cercle4.png' className="cercle" id="cercle4" alt="cercle png"/>
           </div>
           
                <div id="van_shadow" className=" row">
                <div id="left_head_title" className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <p>Creative Director<br/> {"&"} UX/UI Designer</p>
                </div>

                <div id="right_head_title" className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <p>Based in Los Angeles<br/>Available Worldwide</p>
                </div>
                </div>
         
        </div>
        </div>
       
        </div>
       <SecondSec/>
       <ThirdSec/>
       <FourthSec/>
       <FifthSec/>
       <SixthSec/>
       <SeventhSec/>
       <EightSec/>
       <NineSec/>
       <TenSec/>
       <ClientSec/>
       <NextSec/>
       <ProjectSec/>
       <TwSec/>
       <Expertise/>
       <AboutSec/>
       <ContactSec/>
       <Footer/>
        </>
    )
}


export default Home;