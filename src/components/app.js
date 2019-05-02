import React, { Component } from "react";
import moment from "moment";

import PortofolioContainer from './portfolio-container';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <PortofolioContainer />
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>

      </div>
    );
  }
}
