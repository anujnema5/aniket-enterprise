import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import chargesImg from "../assets/billcost.webp";
function Charges() {
  return (
    <section className="bg-shadow mt-5 ">
      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-6 ">
            <div className="text-center">
            <img src={chargesImg} alt="" className="w-50 slide-right" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center" id="charges">
            <div className="charges-details text-center  m-4">
              <div className="heading h3 p-0 m-0">
                <div className="card-heading text-center">
                  <span className=" text-primary">
                    {" "}
                    Charges and <SparklesIcon className="icon02" /> Discount
                  </span>
                </div>
              </div>
              <p className="fw-bold ">
                {" "}
                <span className="text-primary">
                    our charges are rs. 1150/- per 5 Lac of project cost which is
                the least in the industry</span> for the qualities that we offer. We do
                have special discounts for people who are ready to become our
                partners.  These partners are typically people who run Online
                Kisosk, DSA Agents and other small businessman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charges;
