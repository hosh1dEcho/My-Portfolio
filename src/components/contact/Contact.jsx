import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1okz5js", "template_dgh6qg7", form.current, {
        publicKey: "-KEXMlfzM9eK0c6gi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {/*  */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                kaungzanthaw27904@gmail.com
              </span>

              <a
                href="mailto:kaungzanthaw27904@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            {/*  */}
            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Kaung Zan Thaw</span>

              <a
                href="https://www.linkedin.com/in/kaung-zan-thaw-056b4a256/"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            {/*  */}
            <div className="contact__card">
              <i className="bx bxl-github contact__card-icon"></i>

              <h3 className="contact__card-title">GitHub</h3>
              <span className="contact__card-data">hosh1d_echo</span>

              <a
                href="https://github.com/hosh1dEcho"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Send me your message</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter Your Name"
              />
            </div>
            {/*  */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="text"
                name="email"
                className="contact__form-input"
                placeholder="Enter your Email"
              />
            </div>
            {/*  */}
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your Message"
              ></textarea>
            </div>

            <button className="button button-flex">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
