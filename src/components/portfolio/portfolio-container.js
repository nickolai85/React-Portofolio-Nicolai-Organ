import React, { Component } from 'react';

import PortofolioItem from './portfolio-item';
export default class PortofolioContainer extends Component {
    render() {
      return (
        <div>
            <h2>Portofolio Items go here ...</h2>
            <PortofolioItem />
        </div>
      );
    }
  }