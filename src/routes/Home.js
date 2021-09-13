import React from "react";
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Home = () =>{

    return(
        <>
        <Navigation></Navigation>
        <Section id="Home">
        </Section>
        <Section id="About"></Section>
            <AboutContainer>
                <Profile></Profile>
                <Skill></Skill>
            </AboutContainer>
        <Section id="Blog"></Section>
        <Section id="Contact"></Section>
        </>
    )
}



export default Home;

const Section = styled.section`
`
const AboutContainer = styled.div`
display:flex;
`

const Profile = styled.div`
`

const Skill = styled.div`
`