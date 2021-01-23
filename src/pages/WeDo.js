import React from 'react'
import styled from 'styled-components'
import Flip from 'react-reveal/Flip';

const WeDo = () => {
    return (
        <Outer>
        <Header>What We Do</Header>
       <Container>
       <Flip top>
           <Items>
                  <CardHead>FrontEnd Development</CardHead>
               <CardPara>We have well experinced UI/Ux designers with current technical combinations for great unique design and interface. 
               We approach trending Figma designs to create good optimized design as per requirements.Handcraft the coding with modern javascrit tech
               to frame a styled components. 
               </CardPara>
           </Items>
           </Flip>
           <Flip top>
           <Items>
               <CardHead>BackEnd Development</CardHead>
               <CardPara>Back end development refers to the server side of an application and everything that communicates between the database and the browser. 
               Back end Development refers to the server side of development where you are primarily focused on how the site works. We deal with right data structure approach for scable architecture.
               
               </CardPara>
           </Items>
           </Flip>

           <Flip top>
           <Items>
               <CardHead>UI/UX Designs</CardHead>
               <CardPara>A UI, UX, and front-end expert observes user behavior to improve the visible design of an application. They have a keen understanding of modern tech stacks and are proficient in crafting aesthetically beautiful interfaces.
               Such goals might include increasing newsletter sign-ups, improving sales conversions, or identifying and removing pain points within an app.
               </CardPara>
           </Items> 
           </Flip>
           <Flip top>
           <Items>
            <CardHead>Digital Marketing</CardHead>
               <CardPara>Develops strong and innovative digital marketing strategies, using SEO, PPC, and other techniques to drive traffic to company pages and generate interest in company products and services. Creates engaging written, graphic, and video content while staying up-to-date on latest marketing technologies and social media
               .</CardPara>
           </Items>
            </Flip>
       </Container>
       </Outer>
    )
}

export default WeDo

const Container = styled.div`
    position:relative;
    background:balck;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem 1rem;
    padding: 2rem 1rem;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    @media(max-width:360px){
        grid-template-columns:repeat(2,1fr);
     }
    `

const Items =styled.div`
    display:grid;
    text-align:center;
   background: rgba(255,255,255,0.4);
   border-radius: 10px;
   border: 1px solid rgba(255,255,255,0.2);
   backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index:2;
 
`
const Outer = styled.div `
    position:relative;
    top:52px;
`
const Header= styled.h1`
    text-align:center;
    padding:20px 10px ;
    border-bottom:1px solid bisque;
    @media(max-width:360px){
        font-size:21px;
     }
`
const CardHead= styled.h3`
    margin:5px 5px;
    @media(max-width:360px){
        font-size:16px;
     }

`

const CardPara = styled.p`
    font-size:16px;
    text-align:left;
    padding:10px 10px;

    @media(max-width:360px){
        font-size:13px;
     }
    `
