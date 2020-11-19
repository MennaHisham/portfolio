import React from "react";
import handleViewport from "react-in-viewport";
import "animate.css/animate.css";

class Animation_Container extends React.Component {
  _isMounted=false;

   state = {
      inViewport: false,
      animation_complete: false,
      classChanged: false,
  
  }
  componentDidMount(){
    this._isMounted=true;
  }

  componentDidUpdate() {
    if (
      this.state.inViewport !== this.props.inViewport &&
      !this.state.animation_complete && this._isMounted
    ) {
      this.setState({ inViewport: this.props.inViewport });
      this.changeClass();
      this.setState({ animation_complete: true });
    }
  }

  changeClass() {
    const { delay } = this.props;
    setTimeout(() => {
      this.setState({ classChanged: true });
    }, delay);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.classChanged) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUnmount(){
    this._isMounted=false;
  }

  render() {
    const { children, animation, id, height } = this.props;
    return (
      <div
        className={this.state.classChanged ? `animated ${animation}` : ""}
        style={{
          opacity: this.state.classChanged ? 1 : 0,
          height: height ? height : "auto",
        }}
        id={id}
      >
        {children}
      </div>
    );
  }
}
const AnimationContainer = handleViewport(Animation_Container);

export default AnimationContainer;
