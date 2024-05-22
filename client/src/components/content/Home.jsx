import React from "react";
import style from "./Home.module.css";
// import heroImg from "../assets/hero.png";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import Services from "./Services";
import Typewriter from "typewriter-effect";
import Charges from "./Charges";

function Home() {
  return (
    <>
    {/* hero section start here  */}
      <section >
        <div className={`mt-5 ${style.containerBg}`}>
          <div className={`container `}>
            <div className={`row ${style.heroText}`}>
              <div className="col-12 d-flex justify-content-start ">
                <div className="hero-heading-sec">
                  <Typewriter
                    options={{
                      strings: ["We will help you to grow business"],
                      autoStart: true,
                      loop: true,
                      wrapperClassName:"text-uppercase text-white h1",
                      cursorClassName: "w-50 h-50"
                    }}
                  />
                  <p className="text-white pt-2">
                    Aniket Enterprises was set up in the year 2007 as a <br />
                    proprietorship concern. It was approved by the state
                    government <br />
                    of Madhya Pradesh for industrial consultancy during 2010
                  </p>
                  <a
                    href="/#aboutUs"
                    className="btn btn-primary py-sm-2 px-sm-4  me-3 opacity-100"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end here  */}


      {/* calling other component from home  */}
      <About />
      <Services />
      <Charges/>
      <Team />
      <Contact />
      
    </>
  );
}

export default Home;
