import React, { Component } from "react";
import moment from "moment";

import PortofolioContainer from './portfolio/portfolio-container';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortofolioContainer />
      </div>
    );
  }
}
