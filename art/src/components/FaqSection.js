import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Togle';
import { AnimateSharedLayout } from 'framer-motion';


const FaqSection = () => {



    return (
        <Faq>
            <h2>
                Any Question <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
            <Toggle title= "How Can I Buy Painthings">
                
                    
                     <div className="answer">
                         <p>Lorem ipsum dolor sit amet.</p>
                  
                          <p>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Rem, porro.
                          </p>
                  
                     </div>
                            
                    
               
                </Toggle>
            <Toggle title = "Picture quality ?">
            
            
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Rem, porro.
                    </p>

                </div>
                
             </Toggle>
             <Toggle title = "Can I purchase a painting?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Rem, porro.
                    </p>

                </div>
                
            
            </Toggle>
            <Toggle title ="Can you ship paintings to overseas?">
            
                
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Rem, porro.
                    </p>

                </div>
            
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
      );
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;

}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}

.question{
    padding:3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;

    p{
        padding: 1rem 0rem;
    }
}
`;
 
export default FaqSection;