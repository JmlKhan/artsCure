import React from "react";
import logo from '../images/logo.png';

import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return ( 
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Arts can cure</h2>
                    </Hide>
                    
                </div>
                <p>Contact Us for Art works</p>
                <button>Contact Us</button>
            </Description>
           <Image>
               <img src={logo} alt=""/>
           </Image>
        </About>
     );
}

 
export default AboutSection;