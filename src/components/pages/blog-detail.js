import React, { Component } from "react";
import axios from "axios";
export default class BlogDetail extends Component {
    constructor(props) {
        //calling props from the route
        super(props);
    
        this.state = {
            //grab id from url
          currentId: this.props.match.params.slug,
          blogItem: {}
        };
      }
    
      getBlogItem() {
        axios
          .get(
            `https://nick.devcamp.space/portfolio/portfolio_blogs/${this.state
              .currentId}`
          )
          .then(response => {
            console.log("response", response);
          })
          .catch(error => {
            console.log("getBlogItem error", error);
          });
      }
    
      componentDidMount() {
        this.getBlogItem();
      }
    
  render() {
    return (
      <div>
        <h1>Blog detail</h1>
      </div>
    );
  }
}