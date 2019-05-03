import React, { Component } from 'react';

import PortofolioItem from './portfolio-item';
export default class PortofolioContainer extends Component {
  constructor(){
    super();
    this.state = {
      pageTitle: "Welcome to my Portfolyo!",
      data: [
        {title: "Dina Cociug", category:"HVAC"},
        {title: "VentSystem", category:"HVAC"},
        {title: "Verozone Solution", category:"IT"},
        {title: "Amazon", category:"eComerce"},
        {title: "Leads Trade", category:"IT"}
    ]
    
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  portofolioItems(){

    return this.state.data.map(item =>{
      return <PortofolioItem title={item.title} url={"google.com"}/>;
      //      return <h1>{item}</h1>;
    })
  }
  handleFilter(filter){
    this.setState({
      data: this.state.data.filter(item =>{
        return item.category === filter;
      } )
    })
  }
    render() {
      return (
        <div>
            <h2>{this.state.pageTitle}</h2>
            {this.portofolioItems()}
            <button onClick = {() => this.handleFilter('HVAC')}>HVAC</button>
            <button onClick = {() => this.handleFilter('IT')}>IT</button>
            <button onClick = {() => this.handleFilter('eComerce')}>eComerce</button>
        </div>
      );
    }
  }