import React, {Component}from "react";
import Helmet from "react-helmet";
import Layout from "./Layout";
import Intro from "../sections/Intro/PersonalIntro";
import AboutMe from "../sections/About/AboutMe";
import Services from "../sections/services/Services";
import Work from "../sections/work/Work";
import Contact from "../sections/contact/Contact";
import axios from "axios";

class Index extends Component{
  _isMounted=false;
  state={
    data: []
  }

     async componentDidMount() {
        this._isMounted=true;
    const response = await axios.get("/api/projects");
    if(this._isMounted){
    this.setState({ data: response.data });
  }
    }

  componentWillUnmount(){
    this._isMounted=false;
  }
  render() {
      if(this.state.data.length !==0 && this._isMounted){
     return ( <React.Fragment>
        <Helmet>
          <title>Minatallah</title>
          <meta name="description" content="Personal Portfolio" />
        </Helmet>
        <Layout
          isHome={true}
          sections={['about', 'services', 'portfolio','contact']}
        >
          <Intro />
          <AboutMe />
          <Services />
          <Work data={this.state.data} />
          <Contact />  
        </Layout>
      </React.Fragment>
      )
      }
      else{
        return <div class="loading">
  <span>loading</span>
</div>
      }
    
  }
}

export default Index;