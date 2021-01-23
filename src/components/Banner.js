import React from 'react'
import styled from 'styled-components'
import sphere from './sphere.gif';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
       <BannerContainer>
           <BannerLeft>
           <Fade right>
               <Heading>
                   This is team of remote developers working for better performannce in trending passion to deploy most wanted web architecture.
               </Heading>
               </Fade>
           </BannerLeft>
           <BannerRight>
            <Image alt="sphere circle" src={sphere} />
           </BannerRight>
       </BannerContainer>
    )
}

export default Banner

const BannerContainer=styled.div`
    background:#000004;   
    display:flex;
    flex-direction:row nowrap; 
    position:relative;
    top:70px;  
`
const BannerLeft=styled.div`
    flex:1;
    width:50%;
    align-items:center;
    align-self: center;
    padding: 2rem 1rem;
    

   @media(max-width: 768px){
       padding:1.2em;
      
   } 
`
const Heading=styled.h1`
    color:white;
    text-align:left;
    
    @media(max-width: 768px){
       font-size:1.2em;
      } 
      @media(max-width: 360px){
       font-size:0.9em;
      }   
`
const BannerRight=styled.div`
    width:50%;
    flex:1;
    align-items:center;
    align-self: center;
`
const Image=styled.img`
    width:100%;
    height:auto;
    object-fit:cover;
`