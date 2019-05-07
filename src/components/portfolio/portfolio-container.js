import React, { Component } from 'react';
import axios from "axios";

import PortofolioItem from './portfolio-item';
export default class PortofolioContainer extends Component {
  constructor(){
    super();
    this.state = {
      pageTitle: "Welcome to my Portfolyo!",
      isLoading: false,
      data: []
    
    };

    this.handleFilter = this.handleFilter.bind(this);
  }
  getPortfolioItems(){
    axios.get('https://nick.devcamp.space/portfolio/portfolio_items')
    .then(response => {
    
      this.setState({
        data : response.data.portfolio_items
      });

    })
    .catch(error => {
      console.log(error);
    });

  }
  portofolioItems(){
    return this.state.data.map(item =>{
      return(
         <PortofolioItem 
            key={item.id}
            item={item}
         />
      );
    });
  }

  
  handleFilter(filter){
    this.setState({
      data: this.state.data.filter(item =>{
        return item.category === filter;
      } )
    })
  }
  componentDidMount(){
    this.getPortfolioItems();
  }
    render() {
      if(this.state.isLoading){
        return <div>Loading ...</div>
      }
      return (
        <div>
            <h2>{this.state.pageTitle}</h2>
            
            <button onClick = {() => this.handleFilter('HVAC')}>HVAC</button>
            <button onClick = {() => this.handleFilter('IT')}>IT</button>
            <button onClick = {() => this.handleFilter('eComerce')}>eComerce</button>
            {this.portofolioItems()}
        </div>
      );
    }
  }