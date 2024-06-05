import React from "react";
import {
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
      <section id="services">
        <div className="container ">
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
                <div className="h4"> Project Identification</div>
                <div className="text-center fs-6">
                  It is a tedious and an analytical work, new project may be
                  identified on basis of Promoter’s Own Capacity to contribute
                  in proposed project, Interest or Inclination of Promoter,
                  Location of proposed Project, Market or Demand analysis of
                  Selected project and Availability of Raw Materials and
                  Requisite Skill Manpower.{" "}
                </div>
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
                <div className="h4">Pre Investment Feasibility Studies</div>
                <div className="text-center fs-6">
                  This helps investor in assessing the project prospects in the
                  area. This is based upon tentative cost of plant and
                  equipment.{" "}
                </div>
              </div>{" "}
            </div>
            <div className="col-md-4 text-center service-box-main">
              {" "}
              <div className="service-box h-100">
                {" "}
                <div>
                  {" "}
                  <UserIcon className="icon" />{" "}
                </div>{" "}
                <div className="h4">Detailed Project Report</div>
                <div className="text-center fs-6">
                  Detailed Project Report is the report which contains all the
                  details of the project on actual basis along with comparison
                  of other supplier. It would give clear picture of proposed
                  project to bank or financial institution, which in turn will
                  help in assisting project by bank or financial institution.{" "}
                </div>
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
                <div className="h4">Technical & Financial Appraisal</div>
                <div className="text-center fs-6">
                  This is a report prepared on the request of Bank or Financial
                  Institution in which project is appraised on technical,
                  financial and Demand of proposed project.{" "}
                </div>
              </div>{" "}
            </div>
            <div className="col-md-4 text-center service-box-main">
              {" "}
              <div className="service-box02 h-100">
                {" "}
                <div>
                  {" "}
                  <BuildingOfficeIcon className="icon" />{" "}
                </div>{" "}
                <div className="h4">Valuation Studies for Real Estate</div>
                <div className="text-center fs-6">
                  Valuation of real estate can be done for various purposes like
                  valuation for bank loans, income tax, buy-sell opinions,
                  acquisitions, insolvency etc
                </div>
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
                <div className="h4">Techno Economic Viability Reports</div>
                <div className="text-center fs-6">
                  These reports involve analysis of project based on its market
                  and viability for the banks/financial institutions specially
                  for funding of green field projects.
                </div>
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
                <div className="h4">Land Allotment Documentation</div>
                <div className="text-center fs-6">
                  It is a short project report for the allotment or transfer of
                  land from one owner to another. It contains project details on
                  estimated basis.{" "}
                </div>
              </div>{" "}
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
                <br />
                & <br />
                Chartered Accountant Certificates
              </div>{" "}
            </div>
            <div className="col-md-4 text-center service-box-main">
              {" "}
              <div className="service-box h-100">
              <div>
                  {" "}
                  <CircleStackIcon className="icon" />{" "}
                </div>{" "}
                <div className="h4">Computerised Mechanised Analysis</div>
                <div className="text-center fs-6">
                This form plays a very important role in the analysis of project by the banker. We prepare this form keeping in mind the business and bank's requirement.{" "}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
