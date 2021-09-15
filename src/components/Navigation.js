import React, { useState } from "react";
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';

const Navigation = (props) =>{

    const [ScrollY, setScrollY] = useState(0);
    const [style, setStyle] = useState({}); // Navbar style 
    const [allowUpStyle, setAllowUpStyle] = useState({}); // Allowup style
    const handleFollow = () => {
      setScrollY(window.pageYOffset);
    }
    useEffect(() => {
      if(ScrollY > 300){
        setStyle({opacity:0.4})
        setAllowUpStyle({opacity:1, pointerEvents: 'auto'})
      }else{
        setStyle({opacity:0})
        setAllowUpStyle({opacity:0, pointerEvents: 'none'})
      }
    }, [ScrollY])
  
    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow);
      }
      watch();
      return () => {
        window.removeEventListener('scroll', handleFollow);
      }
    })
    

    return(
        <>
        <Nav style={style}>
            <Nav__logo >
                <Image src="/images/logo.png"></Image>
            </Nav__logo>
            <Nav__menu >
                {props.navbarList.map((item)=>{
                    return (
                        <Li id={item} onClick={props.onClick}>{item}</Li>
                    )
                })}
            </Nav__menu>
        </Nav>
        <AllowUp id={"Top"} style={allowUpStyle} onClick={props.onClick}>Top</AllowUp>
        </>
    )
}

export default Navigation;


const Nav = styled.nav`
display: flex;
justify-content: space-between;
background-color: black;
width: 100%;
padding: 8px;
position: fixed;
top:0px;
z-index: 1;
`
const Nav__logo = styled.div`
width:50px;
height:50px;
`
const Image = styled.img`
width:100%;
height:100%;
`
const Nav__menu = styled.ul`
list-style: none;
padding-left: 0px;
display: flex;
margin: 0 20px;
font-family: 'Balsamiq Sans', cursive;
font-family: 'Rubik', sans-serif;
`

const Li = styled.li`
padding: 8px 12px;
margin: 4px;
color: white;
font-weight: 800;
font-size: 20px;
`

const AllowUp = styled.button`
position: fixed;
bottom: 50px;
right: 50px;
width: 50px;
height: 50px;
border: 1px solid black;
border-radius: 50%;
z-index: 2;
opacity: 1;
pointer-events: auto;
background-color: white;
`