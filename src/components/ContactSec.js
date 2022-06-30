import React from 'react';





const ContactSec = ()  =>{
    
    return(
        <>
        
        <section id="contact">
        <div id="fourth_sect_title">
              <h4>Ready to chat?</h4>
                <img src="images/arrow1.png" alt="arrow"/>
                  </div>

<div className="container">
    

<div id="conta" className="mt-5 pt-5">
    <h2 id="getin">GET IN TOUCH</h2>

    <div id="contact_form" className="w-80 m-auto">

    <form action='mailto:bydanvee@gmail.com' method="post" className="form">
      <label>My Name is</label>
      <input className="form_con" placeholder='YOUR NAME' type="text" name="user_name" />
      <label>My Email is</label>
      <input placeholder='YOUR EMAIL' className="form_con" type="email" name="user_email" />
      <label>Message</label>
      <textarea col="10" row="10" placeholder='START TYPING 'className="form_con" name="message" />
      <button type="submit" id="subi">Send To Dan Vee <spn><img id="contaArrow"src="images/arrow2.png"alt="arrow"/></spn></button>
    
    </form>


    </div>

</div>



<div id="gmaili">
    <div id="man" className="text-center">
        <img src="images/com.png" alt="man"/>

        <h2 id="g_title">me@bydanvee.com</h2>
    </div>
</div>
</div>


        </section>
        
        </>
    )
}


export default ContactSec;
