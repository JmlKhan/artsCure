import React from 'react';
// import icons
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/clown.jpg";

//styled
import styled from "styled-components";
import { About, Description, Image } from "../styles";



 const ServiceSection = () => {
     return(
         <Services>
             <Description>
                 <h2><span>Gallery</span></h2>
                 <Cards>
                     <Card>
                         <div className="icon">
                             <img src={clock} alt="icon"/>
                             <h3>Efficient</h3>

                         </div>
                         <p>Lorem ipsum dolor sit amet consectetur.</p>
                     </Card>
                     <Card>
                         <div className="icon">
                             <img src={teamwork} alt="icon"/>
                             <h3>Teamwork</h3>

                         </div>
                         <p>Lorem ipsum dolor sit amet consectetur.</p>
                     </Card>
                     <Card>
                         <div className="icon">
                             <img src={diaphragm} alt="icon"/>
                             <h3>Diaphragm</h3>

                         </div>
                         <p>Lorem ipsum dolor sit amet consectetur.</p>
                     </Card>
                     <Card>
                         <div className="icon">
                             <img src={money} alt="icon"/>
                             <h3>Money</h3>

                         </div>
                         <p>Lorem ipsum dolor sit amet consectetur.</p>
                     </Card>
                 </Cards>
             </Description>
                 <Image>
                     <img src={home2} alt=""/>
                 </Image>
         </Services>
     )
     
 }
 const Services = styled(About)`
   @media (max-width: 1300px){
     width: 100%;  
    }
  h2{
      padding-bottom: 5rem;

  }
  p{
     width: 70%auto;
     padding: 2rem 0rem 4rem 0rem; 
  }
 `;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`;
const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
}
h3{
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
}
`;
 export default ServiceSection;