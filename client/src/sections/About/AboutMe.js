import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import RevealContent from "../../components/RevealContent";
import AnimationContainer from "../../components/AnimationContainer";
import TabsPart from "./TabsPart";

export default class AboutMe extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const Section = styled.section`
      position: relative;
      overflow: hidden;
      background-color: #050505;
      padding-top: 50px;
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      @media (max-width: 767px) {
        padding: 80px 20px;
      }
      @media (max-width: 500px) {
        padding: 0 20px;
      }
    `;


    const AboutContainer = styled(Container)`
      padding: 100px 0;
      @media (max-width: 500px) {
        padding: 50px 0;
      }
    `;


    const LeftCol = styled(Col)`
      display: flex;
      align-items: baseline;
      justify-content: center;
      @media (max-width: 500px) {
        margin-bottom: 50px;
      }
    `;

    const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
            20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
            30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
            40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
            70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
            80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
            100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
        `;
    const ImageContainer = styled.div`
      border-radius: 20px;
      overflow: hidden;
      animation: ${AnimatedShadow} 10s infinite alternate;
      @media (max-width: 767px) {
        margin-bottom: 50px;
      }
    `;

    const Image = styled.img`
      max-width: 400px;
      @media (max-width: 767px) {
        max-width: 200px;
      }
      @media (max-width: 1400px) {
        max-width: 280px;
      }
    `;

    const Separator = styled.div`
      height: 5px;
      width: 50px;
      background-color: #04e5e5;
      margin-bottom: 20px;
    `;

    const Heading = styled.h2`
      font-size: 70px;
      font-family: Teko;
      color: #fff;
      line-height: 50px;
    `;

    const Text = styled.p`
      font-size: 12px;
      font-weight: 300;
      color: #c5c5c5;
    `;

    return (
      <Section id="about">
        <AboutContainer>
          <Row>
            <LeftCol md={6}>
              <AnimationContainer animation="fadeIn">
                <ImageContainer>
                  <RevealContent delay={500}>
                    <Image
                      src="/PersonalPhoto.jpg"
                      alt="about"
                    />
                  </RevealContent>
                </ImageContainer>
              </AnimationContainer>
            </LeftCol>
            <Col md={6}>
              <AnimationContainer animation="fadeIn">
                <Heading>About Me</Heading>
                <Separator />
                <Text>Hello There! Welcome to My Website!</Text>
                <Text>
                My name is Minatallah Hisham (Menna for short), 25 years old Egyptian living in Berlin. I graduated from Mechatronics Engineering from The German University in Cairo with a passion for coding. After graduation, I enrolled in a bootcamp called Ironhack to be a full stack Javascript Web Developer. I enjoy creating beautifully designed, intuitive and functional websites. 
                Apart from coding, I have a strong passion for aircrafts since I was a kid, so I had my two internships of a total of 3 months related to that field and fulfilled my passion of working with aircrafts in a closer scope in the maintenance and development sections. 
                Looking forward to helping businesses grow through my skills in developing and optimizing interactive, user-friendly, and feature-rich websites. 
                </Text>
                <TabsPart />
              </AnimationContainer>
            </Col>
          </Row>
        </AboutContainer>
      </Section>
    );
  }
}

