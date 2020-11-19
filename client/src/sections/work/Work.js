import React from 'react'
import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import WorkItem from './WorkItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnimatedHeading from '../../components/AnimatedHeading'
import AnimationContainer from '../../components/AnimationContainer'

export default class Work extends React.Component {
    
    render() {

        const Section = styled.section`
          background-color: #050505;
          padding: 100px 0;
        `
        const WorkContainer = styled.div`
            .slick-slide {
              display: block;
              margin: 0px 0 70px 0px;
            }
            .slick-dots {
              bottom: 0;
              li button:before,.slick-dots li.slick-active button:before {
                color: #04e5e5;
              }
            }
          }
        `


        const settings = {
            dots: true,
            swipe: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 10000,
            loop: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        }
        
        return (
            <Section id="portfolio">
                  <Col md={12} style={{padding: 0}}>
                    <Container>
                      <AnimatedHeading text="Recent projects" />
                    </Container>
                    <WorkContainer>
                      <AnimationContainer animation="fadeIn">
                        <Slider {...settings}>
                          {this.work()}
                        </Slider>
                      </AnimationContainer>
                    </WorkContainer>
                </Col>
            </Section>
        )
    }

  work() {
      const items  = this.props.data
      return items.map((value, index) => {
        return (
          <WorkItem
             key={index}
            index={index}
            id={value._id} 
            name={value.name}
            link={value.link}
            githublink={value.githublink}
            description={value.description}
            image={value.image}
            type="slider"
          />
        )
      })
    }
}