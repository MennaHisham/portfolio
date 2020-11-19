import React, { Component } from "react";
import Index from "./components/Index";
import WorkDetail from "./components/WorkDetail";
import { Route } from "react-router-dom";


export default class App extends Component {

  render() {
    return(
      
     <div>
 <Route exact path="/work/:name"   render={props => (
              <WorkDetail {...props} history={props.history} />
            )}/>
  <Route exact path="/" render={props => (
              <Index {...props} />
            )}/>
    </div>
    )
    }
    
  }

