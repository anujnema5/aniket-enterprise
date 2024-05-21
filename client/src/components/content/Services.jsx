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
      <div className="container mt-4">
      <div className="row text-center">
        <h3 className="card-heading text-center">
          <span className="about-text text-primary">
            Our Services <SparklesIcon className="icon02" />{" "}
          </span>
        </h3>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box h-100">
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
          <div className="service-box h-100">
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
          <div className="service-box h-100">
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
          <div className="service-box02 h-100">
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
          <div className="service-box02 h-100">
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
          <div className="service-box02 h-100">
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
          <div className="service-box h-100">
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
          <div className="service-box h-100">
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
          <div className="service-box h-100">
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
