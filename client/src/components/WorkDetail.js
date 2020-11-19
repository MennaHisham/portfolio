import React, { Component } from "react";
import axios from "axios";
import AnimatedHeading from "./AnimatedHeading";
import { Row, Col, Container } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import RevealContent from "./RevealContent";
import Counter from "./Counter";
import AnimationContainer from "./AnimationContainer";
import { Link } from "react-router-dom";
import Arrow from "../sections/work/Arrow"

export default class WorkDetail extends Component {
    _isMounted=false;
  state = {
    work: []
  };

  
    async componentDidMount() {
        this._isMounted=true;
        const name = this.props.match.params.name;
    const response = await axios.get(`/api/project/${name}`);
    if(this._isMounted){
    this.setState({ work: response.data });
  }
    }

    //   this._isMounted=true;
    // const name = this.props.match.params.name;
    // axios.get(`/api/project/${name}`).then(response => {
    //     if(this._isMounted===true){
    //   this.setState({
    //     work: response.data
    //   });
    // }
    // })
  
  componentWillUnmount(){
      this._isMounted=false;
  }
  

  render() {
    const work = this.state.work;
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


    const DetailContainer = styled(Container)`
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
      width: 500px;
      height:600px;
      @media (max-width: 767px) {
        max-width: 200px;
      }
      @media (max-width: 1400px) {
        max-width: 280px;
      }
    `;
     const IconRow = styled(Row)`
            margin-top: 150px;
            margin-left:250px;
            
        `

        const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
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
        const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            border-radius: 150px;
            transition: .5s;
        `
        
        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
        `
        const Icon = styled.img`
            height: 70px;
            width: 70px;
            object-fit: contain;`
             const InfoTitle = styled.a`
            font-size: 35px;
            color: #fff;
            font-family: Teko;
            text-align: center;
        `

        const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

        const InfoLinkContainer = styled.div`
            text-align: center;
        `

       
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
      font-size: 20px;
      font-weight: 300;
      color: #c5c5c5;
      text-align-last: center;
    `;
     const BackButton = styled.button`
      background: none;
      border: none;
      color: #fff;
      text-transform: capitalize;
      font-weight: 500;
      font-size:50px;
      margin: 10px 5px;
      transition: 0.5s;
      &:hover {
        color: #04e5e5;
      }
      &:focus {
        outline: none;
      }
      @media (min-width: 501px) and (max-width: 1023px) {
        font-size: 100px;
        margin: 2px;
      }
    `;
    
    if (this.state.work.lenghth===0) {
            return <div class="loading">
  <span>loading</span>
</div>
    }else{
    return (
      <div>
      <Link to="/">
      <Arrow/>
      </Link>
       <DetailContainer>
       <AnimatedHeading text={work.name + ""}/>
          <Row>
            <LeftCol md={6}>
              <AnimationContainer animation="fadeIn">
                <ImageContainer>
                  <RevealContent delay={500}>
                    <Image
                      src={work.image}
                      alt="about"
                    />
                  </RevealContent>
                </ImageContainer>
              </AnimationContainer>
            </LeftCol>
            <Col md={6}>
              <AnimationContainer animation="fadeIn">
                <Text>
               {work.description}
                </Text>
              </AnimationContainer>
            </Col>
          </Row>
        <Col>
           <IconRow>
                       
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1000}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src="/globe.png" alt="website" />
                            </IconContainer>
                            <Info>
                              <InfoLinkContainer>
                                <InfoTitle target="_blank" href={work.link}>
                                 Visit Website
                                </InfoTitle>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1500}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src="/github.png" alt="github" />
                            </IconContainer>
                            <Info>
                          
                              <InfoLinkContainer>
                                <InfoTitle target="_blank" href={work.githublink}>
                                 Visit Github
                                </InfoTitle>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                  </IconRow>
                  </Col>
        </DetailContainer>
      </div>
    );
  }
  }
}

