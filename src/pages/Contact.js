import React, { Component } from 'react';
import styled from 'styled-components';
import bauhaus from '../assets/buhaus.png'
import Zoom from 'react-reveal/Zoom';

class Contact extends Component {
    render() {
        return (
            <Container>
            <Header>Contact us</Header>
            <Image alt='bauhaus' src={bauhaus} ></Image>
    <Zoom top>
    <Card> 
    <FormGroup>
      <Label htmlFor="label">Name</Label>
      <Input id="label" />  
    </FormGroup>
    
    <FormGroup>
      <Label>Email</Label>
      <Input />
    </FormGroup>
    
    <FormGroup>
      <Label>Contact</Label>
      <Input />
    </FormGroup>

            <FormGroup>
                <Label>Message</Label>
                <TextArea rows='5' cols='10 ' > </TextArea>
            </FormGroup>
    <FormGroup>
        <Button>Submit</Button>
    </FormGroup>
  
                </Card>
                </Zoom>
            </Container>
        );
    }
}

export default Contact;


const Container= styled.div`
    position:relative;
    top:52px;
    
    `

const Image = styled.img`
    width:100%;
    max-height:600px;
    `
const Header= styled.h1`
    text-align:center;
    padding:20px 5px;
    border-bottom:1px solid bisque;
    `
const Card= styled.div`
    display:flex;
    flex-direction:column;
    width: auto;
    height:auto;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow:  10px 10px 30px #bebebe,
             -10px -10px 30px #ffffff;
    position:absolute;
    top:21%;
    left:12%;
    bottom:10% ;
    padding:2rem 2rem;
    align-items:center;
    text-align:left;

    @media(max-width:768px){
        padding:1rem 1rem;
        position:relative;
        left:5px;
        width:81vw;
        height:auto;
        margin:10px;

    }
    `

export const FormGroup = styled.div`
color: black;
display: block;
width: 300px;
margin: 5px auto;

@media(max-width:768px){
    width:100%;
}
`;

export const Label = styled.label`
margin-bottom: 0.5em;
color: black;
display: block;
`;


export const Input = styled.input`
padding: 0.5em;
color: palevioletred;
background: #b3b1b138;
border: none;
border-radius: 3px;
width: 100%;
margin-bottom: 0.5em;
`;

export const Message = styled.label`
margin-bottom: 0.5em;
color: palevioletred;
display: block;
`;

const Button=styled.button`
    background:blueviolet;
    color:white;
    padding:5px 15px;
    border-radius:25px;
    `
    
const TextArea = styled.textarea`
   padding: 0.5em;
color: palevioletred;
background: #b3b1b138;
border: none;
border-radius: 3px;
width: 100%;
margin-bottom: 0.5em;
    `