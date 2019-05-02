import React, { Component } from 'react';

import PortofolioItem from './portfolio-item';
export default class PortofolioContainer extends Component {
  constructor(){
    super();
    console.log("Portfolio Container has rendered");
  }
  portofolioItems(){

    const data = ["Dina Cociug", "Vent System", "Verozone", "Amazone", "Leads trade"];
    return data.map(item =>{
      return <PortofolioItem />;
      //      return <h1>{item}</h1>;
    })
  }
    render() {
      return (
        <div>
            <h2>Portofolio Items go here ...</h2>
            {this.portofolioItems()}
        </div>
      );
    }
  }