import React from "react";
import logo from '../images/logo.png';
const AboutSection = () => {
    return ( 
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Arts can cure</h2>
                    </div>
                    
                </div>
                <p>Contact Us for Art works</p>
                <button>Contact Us</button>
            </div>
           <div className="image">
               <img src={logo} alt=""/>
           </div>
        </div>
     );
}
 
export default AboutSection;