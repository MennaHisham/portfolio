import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import AnimationContainer from '../../components/AnimationContainer'
import AnimatedHeading from '../../components/AnimatedHeading'

export default class Services extends React.Component {

    shouldComponentUpdate() {
        return false
    }
      
    render() {
        // in const Section styled section background-image: url(${this.props.background.childImageSharp.fluid.src});
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
        `
        const gradientAnimation = keyframes`
            0% {
                background-position: 15% 0%;
            }
            50% {
                background-position: 85% 100%;
            }
            100% {
                background-position: 15% 0%;
            }
        `

        const ColorAnimation = keyframes`
            0%  {background: #04e5e5;}
            10% {background: #f37055;}
            20% {background: #ef4e7b;}
            30% {background: #a166ab;}
            40% {background: #5073b8;}
            50% {background: #04e5e5;}
            60% {background: #07b39b;}
            70% {background: #6fba82;}
            80% {background: #5073b8;}
            90% {background: #1098ad;}
            100% {background: #f37055;}
        `

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
        `
        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                animation: ${AnimatedShadow} 10s infinite alternate;
                transform: translateY(-10px);
            }
        `
         const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            width: 120px;
            height: 120px;
            margin: 0 auto 25px auto;
            background-color: #fff;
            border-radius: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 17px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                position: relative;
                bottom: 2.5px;
                animation: ${ColorAnimation} 10s infinite alternate;
            }
        `

        return(
            <Section id="services">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="My Services" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src="/developement-icon.png" alt="Web App Development" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                MERN Stack Web Development
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Participating in the design and creation of scalable software.
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Writing clean, functional code for client-side and server-side.
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                   Develop and manage well-functioning databases and applications.
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown"  delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src="/wordpress.png" alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Wordpress Developement
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                               Strong understanding of HTML,CSS and Javascript for customised theme development.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Ensuring high-performance and availability.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Managing all technical aspects of the CMS.
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                    <AnimationContainer animation="fadeInRight" delay={1200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src="/ux.png" alt="UI/UX Design" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                UI/UX Design
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Gathering and evaluating user requirements.
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                   Develop UI mockups and prototypes using Figma to clearly illustrate how sites function and look like.
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Conduct layout adjustments based on user feedback.
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                    </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}