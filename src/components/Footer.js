import React from 'react';




const Footer = ()=>{
    return(
        <>

        <footer>
<div id="fLogo">
    <img src="images/Logo.png" alt="flogo"/>
</div>
<div className="container row">
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 footer_social">
        <li><a href="https://www.instagram.com/bydanvee/">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/dan-vee-210229241/">Linkedin</a></li>

    </div>
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 footer_log_text">
        <p>&copy; Dan Vee. All Rights Reserved. 2022</p>
        
    </div>
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 footer_top">
        <a href="#" >Back to top <img src="images/arrow3.png" alt="arrow" /></a>
    </div>
    
    </div>


        </footer>
        
        </>
    )
}


export default Footer;