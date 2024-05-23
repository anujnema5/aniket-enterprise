import React from "react";
import whatDo from "../assets/what-we-do.png";
import "../../../src/About.css";
import {
  SparklesIcon
} from "@heroicons/react/24/outline";

function About() {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="col-lg-6 text-center">
          <img className="about-img img-fluid" src={whatDo} alt="" />
        </div>
        <div className="col-lg-6 " id="aboutUs">
          <p className="about-para justify-content-center text-center  fw-bold">
            <h3 className="card-heading">
              <span className="about-text text-primary">
                {" "}
                About <SparklesIcon className="icon02" /> Aniket Enterprises
              </span>
            </h3>
            Our Organization i.e. Aniket Enterprises was set up in the year
            2007as a proprietorship concern. It was approved by the state
            government of Madhya Pradesh for industrial consultancy during 2010.{" "}
        
            We offer multiple industrial consultancy services to our clients
            from Investment Profile, Detailed Project Report and Techno Economic
            viability reports etc.  
              <span className="text-primary">&nbsp;
                We offer consultancy services in different sectors like food
              processing, Engineering, Plastic, Dairy, Manufacturing and
              Construction etc.
            </span>{" "}
           
            Our wide gamut of consultancy services include preparation of
            industrial feasibility reports for banks below 1 Crore and a few
            above 1.00 Cr On an average we prepare detailed project reports for
            more than 1000 clients every year 
            We also provide property valuation services to various banks. 
            We are known for our quality work, integrity and time effectiveness.{" "}
           
          </p>
        </div>
      </div>

      

  
    </div>

  
  );
}

export default About;
