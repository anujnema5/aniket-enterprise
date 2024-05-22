import React from "react";
import style from "./Home.module.css";
// import heroImg from "../assets/hero.png";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import Services from "./Services";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <section >
        <div className={`mt-5 ${style.containerBg}`}>
          <div className={`container `}>
            <div className={`row ${style.heroText}`}>
              <div className="col-12 d-flex justify-content-start ">
                <div className="">
                  {/* <h1 className={`text-uppercase text-white ${style.typeWriterEffect}`} >
                    We will help 
                    you to grow business
                  </h1> */}

                  <Typewriter
                    options={{
                      strings: ["We will help you to grow business"],
                      autoStart: true,
                      loop: true,
                      wrapperClassName:"text-uppercase text-white h1",
                      cursorClassName: "w-50 h-50"
                    }}
                  />
                  <p className="text-white fw-bold">
                    Aniket Enterprises was set up in the year 2007as a <br />
                    proprietorship concern. It was approved by the state
                    government <br />
                    of Madhya Pradesh for industrial consultancy during 2010
                  </p>
                  <a
                    href="/#aboutUs"
                    className="btn btn-primary py-sm-3 px-sm-4 rounded-pill me-3 animated slideInLeft"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Team />
      <Contact />
    </>
  );
}

export default Home;
