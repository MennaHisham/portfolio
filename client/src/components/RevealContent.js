import React from 'react'
import handleViewport from 'react-in-viewport'
import styled, { keyframes } from 'styled-components';

class RC extends React.Component {
    _isMounted=false;
   
        state = {
            inViewport: false,
            animation_complete: false,
            classChanged: false,
            animate: false,
            running: false
        }
        componentDidMount(){
            this._isMounted=true;
        }
    callParent() {
        if (this.props.callParentMethod) {
            this.props.parentMethod()
        }
    }
    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete && this._isMounted) {
            this.setState({inViewport: this.props.inViewport})
            let { delay } = this.props
            if (!delay) {
                delay = 0
            }

            this.setState({running : true})
                
            setTimeout(() => {
                this.callParent()
                this.animate()
                .then(() => {
                    this.setState({animation_complete: true, animate: false, running: false})
                })
            }, delay)
            
        }

        if (this.state.inViewport !== this.props.inViewport && this.state.running && this._isMounted) {
            this.setState({animation_complete: true, animate: false, running: false})
            this.callParent()
        }
    }

    animate() {
      this.setState({animate: true})
      return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve()
        }
        , 2000);
      })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation_complete) {
            return false
        } else {
            return true
        }
    }

    componentWillUnmount(){
        this._isMounted=false;
    }

    render() {
        
        const Animation = keyframes`
            0% {
                width: 0;
                left: 0;
            } 
            50% {
                width: 100%;
                left: 0;
            }
            100% {
                width: 0;
                left: 100%;
            }
        `

        const RevealText = keyframes`
            0%{
                opacity: 0;
            }
            
            50% {
                opacity: 0.5;
            }
            
            100% {
                opacity: 1;
            }
        `

        const RevealContainer = styled.div`
            position: relative;
            * {
                opacity: 0;
            }
            &.animation-complete {
                * {
                    opacity: 1;
                }
            }
            
            &:before, &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                z-index: 10;
            }
            
            &:before {
                background-color: #04e5e5;
            }
            
            &:after {
                background-color: #fff;
                animation-delay: .5s;
            }
            &.animate {
                * {
                    animation: ${RevealText} 0.1s 1.1s forwards;
                }
                &:before {
                    animation: ${Animation} 1.8s ease;
                }
                &:after {
                    animation: ${Animation} 1s .6s ease;
                }
            }
        `
        
        const { children } = this.props

        return (
            <div className={this.props.className}>
                <RevealContainer className={!this.state.animation_complete ? this.state.animate && this.state.running ? "animate" : "" : "animation-complete"}>
                    {children}
                </RevealContainer>
            </div>
        )
    }
}

const RevealContent = handleViewport(RC);

export default RevealContent;