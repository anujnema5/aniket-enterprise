import React from "react";
import "../../../src/team.css";
import { SparklesIcon } from "@heroicons/react/24/outline";
import avtarImg1 from "../assets/avtar1.webp";
import avtarImg2 from "../assets/avtar2.png";
import avtarImg3 from "../assets/avtar4.webp";
function Team() {
  return (
    <>
      <section className="team-bg" id="team">
        <div className="container my-5 ">
          <div className="row py-4 ">
            <div className="team-heading text-center">
              <h3 className="team-text text-primary fw-bold">
                Our <SparklesIcon className="icon02" /> Awesome Team
              </h3>
            </div>
          </div>
          <div className="row pb-5 ">
            <div className="col-md-4 text-center service-box-main">
              <div className="team-box h-100 shadow">
                <div className="card h-100">
                  <div class="card-body">
                    <div className="profile-team">
                      <img src={avtarImg1} alt="" />
                    </div>
                    <h5 className="card-title py-3">Mr. Sanjay Agrawal dd</h5>
                    <p className="card-text">(Sr. Industrial Consultant)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center service-box-main">
              <div className="team-box h-100">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <div className="profile-team">
                      <img src={avtarImg2} alt="" />
                    </div>
                    <h5 className="card-title py-3">Mr. Aniket Agrawal </h5>
                    <p className="card-text">
                      (Consultant, Registered Valuer IBBI & u/s 34AB of Wealth
                      Tax Act)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center service-box-main">
              <div className="team-box h-100">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <div className="profile-team">
                      <img src={avtarImg3} alt="" />
                    </div>
                    <h5 className="card-title py-3">Mr. Gagan Ghrawal</h5>
                    <p className="card-text">(Chartered Accountant)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
