import React from "react";
import logo from '../images/logo.png';

import {About, Description, Image, Hide} from '../styles';
// framer motion

import {motion} from 'framer-motion';


const AboutSection = () => {
    const titleAnim = {
        hidden: {opacity:0 },
        show:{
            opacity:1, 
            transition: {duration: 2}
        }
    };

    return ( 
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                            initial="hidden"
                            animate="show"

                        >Arts can cure</motion.h2>
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