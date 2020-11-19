import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from '../../components/Progress'
import Timeline from './Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    split(text){
       let splittedText = text.split ('\n').map ((item, i) => <p key={i}>{item}</p>);
       return splittedText;
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 22px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 20px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Skills
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""} onClick={() => this.setState({tab: "experience"})}>
                        Experience
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""} onClick={() => this.setState({tab: "education"})}>
                        Education
                    </TabSelector>
                </TabSelectors>
           
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <Progress value={90} text="React" />
                        <Progress value={80} text="HTML/CSS" />
                         <Progress value={80} text="Node" />
                         <Progress value={50} text="Java" />
                        <Progress value={90} text="MongoDB" />
                        <Progress value={80} text="Wordpress" />
                        <Progress value={60} text="GraphQL" />
                    </Tab>
                </Tabs>
            
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "experience" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "08/2016 - 09/2016" :  {
                                    title: "Development Engineer Intern",
                                    institution: "Qatar Airways",
                                    description: "Analyze and find solutions to the problems related to components and systems and issue necessary technical documentation and co-ordinate with other departments, vendors and manufacturers to define or implement a solution."
                                },
                                "07/2017 - 09/2017" : {
                                    title: "Maintenance Engineer Intern",
                                    institution: "Qatar Airways",
                                    description:this.split('Scheduled maintenance including visual inspections of internal structure, systems, and power plant items \n Helped in the inspection of the A330 aircraft C check and the replacement of its landing gears and the two engines.'), 
                                   
                                },
                                "2018 - 2019" : {
                                    title: "Host",
                                    institution: "BOUNCEinc Egypt",
                                    description: this.split("Responsible for taking payment for tickets or merchandise, in the form of credit or debit cards. \n Took a first aid course to ensure the safety of the people in the venue"),
                                },
                                "2019 - 2020" : {
                                    title: "Travel Agent",
                                    institution: "Journies Travels and Tours Qatar",
                                    description: this.split( "Cooperated with 50+ clients weekly to determine their needs and advising them appropriate destination, modes of transportations, travel dates, costs, and accommodations.")
                                }
                            }
                        }
                    />
                    </Tab>
                    <Tab style={{
                            display: this.state.tab === "education" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "2013 - 2019" :  {
                                    title: "Bachelor's Degree",
                                    institution: "German University in Cairo",
                                    description: this.split("Graduated with the ability to apply mathematics, physics, mechanics and electronics to solve engineering and industrial problems. \nTechnical expertise in mechanical design, computer-aided design, robotics as well as manufacturing technology. \n Technical expertise in digital design, microcontroller operation, interfacing, programming, sensors, actuators, drive systems, control theory and data communication.")
                                },
                                "2020 - 2020" : {
                                    title: "Bootcamp",
                                    institution: "Ironhack",
                                    description: this.split("Learned to build a full stack web application using the MERN stack: React.js, Node.js, Express.js & MongoDB \n Create an extensive backend API with Express \n Deploy to Heroku with a postbuild script \n How to use Github for version control")
                                },
                               
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart