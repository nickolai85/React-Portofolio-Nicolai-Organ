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
    
    };
    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }
  handlePageTitleUpdate(){
    this.setState({
      pageTitle: "Something Else"
    })
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
            <hr />
            <button onClick = {this.handlePageTitleUpdate}>Change Title</button>
        </div>
      );
    }
  }