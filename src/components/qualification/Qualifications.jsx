import React, { useState } from 'react'
import './qualifications.css'


const Qualifications = () => {

    const [toggleState, setToggleState] =useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
// https://youtu.be/FmHNS2n-GAE?si=D5S0yyrwZrkEPxBO
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Education</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/*  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior Frontend Developer</h3>
                <span className="qualification__subtitle">EXBRAIN CO.LTD</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 Jan-2024 May
                </div>
              </div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Online Learning Platform like Udemy(Freelance)</h3>
                <span className="qualification__subtitle">
                  Collab With Team
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 Feb
                </div>
              </div>
            </div>
            {/*  */}
            
            {/*  */}
            <div className="qualification__data">
              <div></div>

             

              {/* <div>
                <span className="qualification__rounder"> </span>
                <div className="qualification__line"></div>
              </div> */}
            </div>
          </div>

          {/* ???????????????? */}

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/*  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  General Educational Development
                </h3>
                <span className="qualification__subtitle">GED</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 Sep - 2023 May
                </div>
              </div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Ex;braiN Education
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 Apr - 2023 Feb
                </div>
              </div>

              {/* <div>
                <span className="qualification__rounder"> </span>
                <div className="qualification__line"></div>
              </div> */}
            </div>
            {/*  */}

            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications