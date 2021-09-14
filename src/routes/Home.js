import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
import Navigation from '../components/Navigation';

const Home = () =>{

    const jobGroup = "System Engineer";
    const cursor = "|";
    const [typing,setTyping] = useState("");
    const [count,setCount] = useState(0);

    const profileItems = ['NAME','AGE','E-mail','ADDRESS','CAREER']
    const profileValues = ['박동수','28','dongsu2005@naver.com','경기도 수원시','아주대학교 의료원 2018.07 ~']
    
    const skillItems = ['Frontend',"Backend","Database"]
    const skillValues = {
            "Frontend":[
                "html",
                "css",
                "javascript",
                "react"
            ],
            "Backend":[
                "nodejs",
                "python"
            ],
            "Database":[
                "mssql",
                "postgresql"
            ]
        }
    

    useEffect(() =>{
        const interval = setInterval(() =>{
            setTyping(typing + jobGroup[count]);
            setCount(count+1);
        }, 150);
        if(count == jobGroup.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    })



    return(
        <>
        <Navigation></Navigation>
        <Section id="Home" 
                style={{backgroundImage: "url(" + "images/main_bg.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity:1
                
                }}>
            <HomeContainer>
                <Home__jobGroup>{typing}</Home__jobGroup>
                <Home__cursor>{cursor}</Home__cursor>
                <Home__profileText>Dongsu's Portfolio</Home__profileText>
            </HomeContainer>
        </Section>
        <Section id="About">
            <AboutContainer>
                <Profile>
                    <Profile__title>About me</Profile__title>
                    <Profile__details>
                        <Profile__items>
                            {profileItems.map((item)=>{
                                return (
                                    <Profile__item>{item}</Profile__item>
                                )
                            })}
                        </Profile__items>
                        <Profile__values>
                            {profileValues.map((item)=>{
                                return (
                                    <Profile__value>{item}</Profile__value>
                                )
                            })}
                        </Profile__values>
                    </Profile__details>
                </Profile>
                <Skill>
                    <Skill__title>Skill</Skill__title>
                        {skillItems.map((item)=>{
                            return (
                                <Skill__details>
                                    <Skill__items>
                                        <Skill__item>{item}</Skill__item>
                                    </Skill__items>
                                    <SkillContainer>
                                        {
                                            skillValues[item].map((value) =>{
                                                let imgPath = `/images/${value}.png`
                                                return (
                                                    <Skill__values src={imgPath}/>
                                                )
                                            })
                                        }
                                    </SkillContainer>
                                </Skill__details>
                            )
                        })}
                </Skill>
            </AboutContainer>
        </Section>
        <Section id="Blog">
            <BlogContainer>
                <Blog__title>Blog</Blog__title>
            </BlogContainer>
        </Section>
        <Section id="Contact">
            <ContactContainer>
                <Contact__title>Contact</Contact__title>
            </ContactContainer>
        </Section>
        </>
    )
}



export default Home;

const Section = styled.section`
height: 900px;
`
const HomeContainer = styled.div`
padding-top: 600px;
margin-left: 30px;
`
const blinkingEffect = () => {
    return keyframes`
        50% {
        opacity: 0.7;
        }
        75% {
            opacity: 0.3;
        }
        97% {
            opacity: 0.1;
        }
    `;
}
const Home__jobGroup = styled.span`
font-size: 80px;
font-weight: 700;
text-decoration: underline;
text-underline-position: under;
font-family: 'Balsamiq Sans', cursive;
`
const Home__cursor = styled.span`
font-size: 80px;
font-weight: 700;
font-family: 'Balsamiq Sans', cursive;
animation: ${blinkingEffect} 1.2s step-end infinite;
`
const Home__profileText = styled.div`
font-size: 40px;
font-family: 'Balsamiq Sans', cursive;
font-family: 'Rubik', sans-serif;
`

const AboutContainer = styled.div`
display:flex;
justify-content: space-between;
margin-left: 30px;
`
const Profile__title = styled.h3`
font-size: 40px;
`
const Profile__details = styled.div`
display:flex;
`
const Profile__items = styled.div`
margin-right: 10px;
`
const Profile__values = styled.div`
`
const Profile__item = styled.h3`
font-weight: 600;
`
const Profile__value = styled.h3`
font-weight: 400;
color: gray;
`
const Skill__title = styled.h3`
font-size: 40px;
`
const Profile = styled.div`
flex-basis: 40%;
`
const Skill = styled.div`
flex-basis: 60%;
`
const Skill__details = styled.div`
display:flex;
flex-direction: column;
`
const Skill__items = styled.div`
`
const Skill__item = styled.h4`
`
const Skill__values = styled.img`
width:50px;
height:50px;
margin-right: 15px;
`
const SkillContainer = styled.div`
display: flex;
`

//Blog
const BlogContainer = styled.h3`
margin-left: 30px;
`
const Blog__title = styled.div`
font-size: 40px;
font-weight: 600;
`

//Contact
const ContactContainer = styled.div`
margin-left: 30px;
`
const Contact__title = styled.div`
font-size: 40px;
font-weight: 600;
`