import React from 'react'
import {
  ChevronDoubleDownIcon,
  UserIcon,
  ArrowPathRoundedSquareIcon,
  CogIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  CubeTransparentIcon,
  SparklesIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
function Services() {
  return (
    <div>
     <section id='services'>
      <div className="container">
      <div className="row text-center">
        <h3 className="card-heading text-center">
          <span className="about-text">
            Our Services <SparklesIcon className="icon02" />{" "}
          </span>
        </h3>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <ArrowPathRoundedSquareIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Project Identification
          </div>{" "}
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <CogIcon className="icon" />{" "}
            </div>{" "}
            <br /> Pre Investment Feasibility Studies
          </div>
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <UserIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Detailed Project Report
          </div>{" "}
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box02">
            {" "}
            <div>
              {" "}
              <PaperAirplaneIcon className="icon" />{" "}
            </div>{" "}
            <br /> Technical & Financial Appraisal
          </div>
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box02">
            {" "}
            <div>
              {" "}
              <BuildingOfficeIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Valuation Studies for Real Estate
          </div>{" "}
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box02">
            {" "}
            <div>
              {" "}
              <CubeTransparentIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Techno Economic Viability Reports
          </div>{" "}
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <CircleStackIcon className="icon" />{" "}
            </div>{" "}
            <br /> Land Allotment Documentation
          </div>
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <ClipboardDocumentCheckIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Chartered Engineering Certificates
          </div>{" "}
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <ClipboardDocumentListIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Chartered Accountant Certificates
          </div>{" "}
        </div>
      </div>
      </div>

     </section>
    </div>
  )
}

export default Services
