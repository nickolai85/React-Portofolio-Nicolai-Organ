import React, { Component } from 'react';

import PortofolioItem from './portfolio-item';
export default class PortofolioContainer extends Component {
  constructor(){
    super();
    this.state = {
      pageTitle: "Welcome to my Portfolyo!",
      date: [
        {title: "Quip" },
        {title: "Eventbrite" },
        {title: "Ministry Safe" },
        {title: "SwingAway" }
    ]
    }
  }
  portofolioItems(){

    return this.state.date.map(item =>{
      return <PortofolioItem title={item.title} url={"google.com"}/>;
      //      return <h1>{item}</h1>;
    })
  }
    render() {
      return (
        <div>
            <h2>{this.state.pageTitle}</h2>
            {this.portofolioItems()}
        </div>
      );
    }
  }