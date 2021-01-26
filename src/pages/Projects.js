import React, { Component } from 'react';
import Carousel from 'styled-components-carousel';
import styled from 'styled-components';
import animagif from '../assets/animated.gif';
import handsani from '../assets/web.gif';
import officeani from '../assets/officeani.gif';

class Projects extends Component {
    render() {
        return (
            <Outer>
            <Header>Projects Portfolio</Header>
            <Carousel
        slidesToShow={1}
        
        centerPadding={5}
      
    >
       <Container>
        <LeftContainer>
            <h3>Ecommerce Project</h3>
            {/* <InnerPara>However, unlike traditional retail, ecommerce stores don’t attract customers off the street, they aren’t competing with a small selection of stores in one location, and online retail doesn’t deal with people face-to-face.</InnerPara>
            <InnerPara>Planning out an ecommerce project starts by choosing a project management strategy that will help guide your project from start to finish.</InnerPara> */}
            <h4>Scrum</h4>
            <ParaHead>Created to make IT projects more simple, this project management strategy is ideal for managing ecommerce projects. Its key features are:</ParaHead>
            <OrderList>
                <Oli>Daily 15-minute meetings to plan key tasks for the day</Oli>
                <Oli>Project sprints: A one- to four-week-long period focused on one task or goal</Oli>
                <Oli>Sprint reviews to analyze and learn from sprint periods</Oli>
                <Oli>Sprint reviews to analyze and learn from sprint periods</Oli>
                <Oli>Burndown charts to help keep track of whether tasks are on schedule or whether things are being slowed down</Oli>
            </OrderList>
        </LeftContainer>
        <RightContainer>
        <Image alt='animat' src={animagif} ></Image>   
        </RightContainer>      
        </Container>
        
        
        <Container>
        <LeftContainer>
            <h3>Travel Tickets Booking</h3>
            {/* <InnerPara>This Software project is aimed at automation of Online Ticket booking. Objective of the project is to develop customize software package for Ticket booking.</InnerPara>
            <InnerPara>In our daily life we have to book ticket for Bus, movies, Flight and cricket match or foot boll match. When we do this task manually then it becomes very hard to manage the ticket booking. So are developing this system to manage booking of ticket automatically. </InnerPara> */}
            <h4>Kanban</h4>
            <ParaHead>Kanban is similar to Scrum project management but it is less restrictive. Kanban project management has a softer focus that allows you to categorize tasks as ‘To do’, ‘Doing,’ and  ‘Done.’</ParaHead>
            <OrderList>
                <Oli>Continuous release: Making small changes and updates on a very regular basis to contribute to the progress of the overall task</Oli>
                <Oli>A focus on lead times and the strategizing of projects around how long deOliverables will take to execute</Oli>
                <Oli>A visual understanding of the project and what’s coming next</Oli>
                <Oli>Sprint reviews to analyze and learn from sprint periods</Oli>
               
            </OrderList>
        </LeftContainer>
        <RightContainer>
        <Image alt='animat' src={handsani} ></Image>   
        </RightContainer>      
        </Container>
       

        <Container>
        <LeftContainer>
            <h3>Enterprise Resource planning</h3>
            {/* <InnerPara>Enterprise resource planning (ERP) is defined as the ability to deliver an integrated suite of business applications. ERP tools share a common process and data model, covering broad and deep operational end-to-end processes, such as those found in finance, HR, distribution, manufacturing, service and the supply chain.</InnerPara>
            <InnerPara> ERP applications automate and support a range of administrative and operational business processes across multiple industries, including line of business, customer-facing, administrative and the asset management aspects of an enterprise</InnerPara> */}
            <h4>Agile</h4>
            <ParaHead>Created to make IT projects more simple, this project management strategy is ideal for managing ecommerce projects. Its key features are:</ParaHead>
            <OrderList>
                <Oli>Daily 15-minute meetings to plan key tasks for the day</Oli>
                <Oli>Project sprints: A one- to four-week-long period focused on one task or goal</Oli>
                <Oli>Sprint reviews to analyze and learn from sprint periods</Oli>
                <Oli>Sprint reviews to analyze and learn from sprint periods</Oli>
                <Oli>Burndown charts to help keep track of whether tasks are on schedule or whether things are being slowed down</Oli>
            </OrderList>
        </LeftContainer>
        <RightContainer>
        <Image alt='animat' src={officeani} ></Image>   
        </RightContainer>      
        </Container>
    </Carousel>
            </Outer>
        );
    }
}

export default Projects;

const Outer= styled.div `
    position:relative;
    top:52px;
    padding:10px 10px;
`

const ParaHead = styled.h5`
        text-align:justify;
        border-bottom:1px solid bisque;
        padding:10px 10px;
        margin:32px;
       

        @media(max-width: 768px){
        font-size:12px;
    }
    `


const Header = styled.h1`
        text-align:center;
        border-bottom:1px solid bisque;
        padding:20px 10px;
       
        @media(max-width: 768px){
        font-size:18px;
    }
    `
const Container = styled.div `
    position:relative;
    display:flex;
    flex-direction:row;  
    padding:10px;

    @media(max-width: 768px){
        flex-direction:column;
    }

`

const Image=styled.img`
    width:100%;
    height:auto;
`

const LeftContainer = styled.div`
    width:50%;
    text-align:center;
    padding:10px;
    align-self: center;

    @media(max-width: 768px){
        width:100vw;
    }
    
    `

const RightContainer = styled.div`
    width:50%;
    padding:10px;
    align-self: center;

    @media(max-width: 768px){
        width:100vw;
    }
    `

// const InnerPara = styled.p`
//     text-align:left;
//     padding:8px;
//     line-height:1.5;

//     @media(max-width: 768px){
//         font-size:12px;
//         line-height:1.2;
//     }
//     `
const OrderList = styled.ul`
    list-style-type:none;
    text-align:left;
    
    `

const Oli = styled.li`
    padding:10px;
    margin:20px;
    line-height:1.5;

    
    @media(max-width: 768px){
        font-size:12px;
        line-height:1.2;
    }
    `