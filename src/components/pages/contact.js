import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";
export default function(props){
    return (
        <div className="content-page-wrapper">
          <div
            className="left-column"
            style={{
              background: "url(" + contactPagePicture + ") no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="right-column">
            <div className="contact-bullet-points">
              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon icon="phone" />
                </div>
    
                <div className="text">+373-69-307-114</div>
              </div>
    
              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon icon="envelope" />
                </div>
    
                <div className="text">organ.nicolai@gmail.com</div>
              </div>
    
              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon icon="map-marked-alt" />
                </div>
    
                <div className="text">Chisinau, Moldova</div>
              </div>
            </div>
          </div>
        </div>
      );
}