import React,{useState} from 'react';


const Header = ()=>{
const close = "-99999%";
const open =  "0%";

const [menuToggle, setMenuToggle]  = useState(close);
const close2 = "none";
const open2 = "block";
const close3 = "none";
const open3 = "block";
const [clo2, setClo2] = useState(close2);
const [clo3, setClo3] = useState(open3);
const OpenFunc =()=>{
    setMenuToggle(open);
    setClo2(open2);
    setClo3(close3);
}
const cloFun2 = () =>{
    setClo2(close2);
    setClo3(open3);
    setMenuToggle(close);
}










const func4 = () =>{
    setDtoggle(open4);
    setClose5(close5);
    setClose6(open6);
}

const close5 = "none";
const open5 = "block";
const [cl5, setClose5]  = useState(open5);



const close6 = "none";
const open6 = "block";
const [cl6, setClose6]  = useState(close6);


const close7 = "none";
const open7 = "block";
const [cl7, setClose7]  = useState(close7);

const func7 = () =>{
    setDtoggle(close4);
    setClose6(close6);
    setClose5(open5);
    

}
const allclose =()=>{
    setDtoggle(close4);
    setClose6(close6);
    setClose5(open5);
}
const close4 = "-99999%";
const open4 =  "0%";

const [dToggle, setDtoggle]  = useState(close4);
    return(
        <>
        <header>
            <nav>
                <div id="nav_container" className="container">
                    <div className="col-6 col-md-4 col-lg-4 col-xl-4 nav_temp_class">
                        <a href="#" id="Logo1">Dan Vee</a>
                    </div>
                    <div id="logo_m" className="col-6 col-md-4 col-lg-4 col-xl-4  nav_temp_class">
                       <a href="#">
                       <img src="images/Logo.png" alt="logo"/>
                       </a>
                    </div>
                    <div id="navMenuDiv" className="col-6 col-md-4 col-lg-4 col-xl-4  nav_temp_class">
                        <ul style={{left:menuToggle}}>
                            <li><a  href="#fourth_second_title">Work</a></li>
                            <li><a   href="#expertise">Expertise</a></li>
                            <li><a   href="#contact">Contact</a></li>
                            <li>

                                            <div style={{display:cl5}} onClick={()=> func4()} id="nav_wrap">
                                            <div className="strive1"></div>
                                            <div className="strive1 mt-2"></div>
                                            </div>
                                           <button onClick={() =>setClose7(func7)} style={{display:cl6}}id="closei">
                                               <img src="images/close1.png" alt="closei"/>
                                           </button>
                            </li>


                            <div id="mobile_menu_wr">
                                <h4>me@bydanvee.com</h4>

                                <div className="c row">
                                    <div className="col-6 nav_social">
                                       <a onClick={()=>setClo2(cloFun2)} href="https://www.instagram.com/bydanvee/">instagram</a>
                                       <a onClick={()=>setClo2(cloFun2)} href="https://www.linkedin.com/in/dan-vee-210229241/">Linkedin</a>
                                    </div>
                                    <div className="col-6 world">
                                        <p>Available</p>
                                        <p>Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <div style={{display:clo3}} onClick={()=> setMenuToggle(OpenFunc)} id="nav_wrapper">
                            <div className="strive"></div>
                            <div className="strive"></div>
                        </div>
                        
                        <div style={{display:clo2}} id="close2">
                          <button onClick={()=>setClo2(cloFun2)}  className="nav_bt">

                          <div id="nav_wrapper">
                            <div className="strive"></div>
                            <div className="strive"></div>
                        </div>
                          </button>
                        </div>

                    </div>
                </div>















                <div style={{left:dToggle}} id="des_menu_wrap1">
                <ul style={{left:menuToggle}}>
                            <li><a onClick={()=> allclose()} href="#fourth_second_title">Work</a></li>
                            <li><a onClick={()=> allclose()} href="#expertise">Expertise</a></li>
                            <li><a onClick={()=> allclose()} href="#contact">Contact</a></li>
                           


                           
                        </ul>
                        <div id="desk_menu_wr">
                              

                                <div className="c1">
                                    <div className="nav1_social">
                                       <a onClick={()=>setClo2(cloFun2)} href="https://www.instagram.com/bydanvee/">instagram</a>
                                       <a onClick={()=>setClo2(cloFun2)} href="https://www.linkedin.com/in/dan-vee-210229241/">Linkedin</a>
                                    </div>
                                 <div>
                                 <h4 className="ci2">me@bydanvee.com</h4>
                                 </div>
                                    <div className="world1">
                                        <p>Available</p>
                                        <p>Worldwide</p>
                                    </div>
                                </div>
                            </div>
                </div>
            </nav>
        </header>
        
        </>
    )
}

export default Header;