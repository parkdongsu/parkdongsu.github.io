import React from "react";
import styled from 'styled-components';

const Navigation = () =>{
    return(
        <Nav>
            <Nav__logo>
                <Image src="/images/logo.png"></Image>
            </Nav__logo>
            <Nav__menu>
                <Li>Home</Li>
                <Li>About</Li>
                <Li>Blog</Li>
                <Li>Contact</Li>
            </Nav__menu>
        </Nav>
    )
}

export default Navigation;


const Nav = styled.nav`
display: flex;
justify-content: space-between;
background-color: gray;
width: 100%;
padding: 8px;
position: fixed;
z-index: 1;
margin-bottom: 100px;
`
const Nav__logo = styled.div`
`
const Image = styled.img`
width:50px;
height:50px;
`
const Nav__menu = styled.ul`
list-style: none;
padding-left: 0px;
display: flex;
margin: 0 20px;
`
const Li = styled.li`
padding: 8px 12px;
margin: 4px;
color: white;
font-weight: 800;
font-size: 20px;
`