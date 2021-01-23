import React, { Component } from 'react';
import styled from 'styled-components'
import pic from '../components/weare.jpg'

class About extends Component {
    render() {
        return (
                <Outer>
                <Header>About Us</Header>
                <Container>
                        
                    <LeftContainer>
                        <TextArea> We belive in agile team which has stabitlity to find and optimize the crictical problems.We are for better soluions for unnatural and vivid problems in any kind of business.
                         </TextArea>
                    </LeftContainer>
                    <RightContainer>
                        <Image alt='weare' src={pic}></Image>
                    </RightContainer>
                </Container>
                </Outer>
        );
    }
}

export default About;

const Container= styled.div`
    display:grid;
    grid-template-columns: 40% 60%;
    
    `

const LeftContainer = styled.div`
    position:relative;
    top:10;
    padding:2rem 2rem;
    align-self:center;

    @media(max-width:768x){
        font-size:20px;
    }
    
    @media(max-width:360x){
        font-size:10px;
    }

    `

const RightContainer = styled.div`
  
    padding:1rem 1rem;
    align-self: center;
    `

const Header = styled.h1`
    position:relative;
    text-align:center;
    padding:1rem;
    border-bottom:1px solid bisque;

    @media(max-width: 768px){
        padding-top:1rem ;
        font-size:32px;
    }

    
    @media(max-width: 360px){
        margin-top:10px;
        font-size:21px;
    }
    `
const Outer = styled.div `
    position:relative;
    top:52px;
    justify-content:center;
    align-items:center;
`
const Image=styled.img`
    width:100%;
    height:auto;
    object-fit:cover;
`
const TextArea=styled.h2`
    text-align:left;
    justify-content:center;
    padding:1rem 2rem;

    @media(max-width: 768px){
        padding:2rem 1rem;
        font-size:18px;
    }

    
    @media(max-width: 360px){
        padding:1px 2px;
        font-size:9px;
    }
    `