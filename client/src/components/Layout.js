import React from "react";
import PageRevealer from "./PageRevealer";
import Navbar from "./Navbar";
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/portfolio.scss";

class Layout extends React.Component {
  componentDidUpdate() {
    window.location.reload(false);
  }

  render() {
    const { children } = this.props;

    return (
      <div id="main">
        <Navbar
          scroll={this.props.isHome ? true : false}
          sections={this.props.sections}
        />
        <div>{children}</div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
