import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <Power><span>Powered By</span>BBSite</Power>
        </Container>
    )
}


export default Footer

const Container= styled.div`
        display:flex;
        position:relative;
        top:100px;
        width:100vw;
        min-height:100px;
        background:#333333;
    
`
const Power= styled.h3`
    position:absolute;
    bottom:20px;
    left:200px;
    `