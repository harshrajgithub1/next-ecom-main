import React from "react";
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <section
        className="banner"
        style={{ backgroundImage: "url(/assets/img/banner7.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Contact us</h3>
                <ul className="breadcrumb">
                  <li>
                    <a href="/">Start</a>
                  </li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacts-1"
        className="pb-50 inner-page-hero contacts-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title text-center mb-80">
                <h2 className="s-52 w-700">
                  Fragen? <span>Lass uns reden</span>
                </h2>
                <p className="p-lg">
                  Haben Sie Fragen oder benötigen weitere Informationen? Zögern
                  Sie nicht, uns zu kontaktieren! Unser Team steht Ihnen gerne
                  zur Verfügung. Sie können uns per E-Mail unter
                  [E-Mail-Adresse] erreichen oder das Kontaktformular auf
                  unserer Website nutzen. Wir freuen uns darauf, von Ihnen zu
                  hören!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-holder">
                <form name="contactform" className="row contact-form">
                  <div className="col-md-12 input-subject">
                    <p className="p-lg">This question is about: </p>
                    <span>
                      Choose a topic, so we know who to send your request to:{" "}
                    </span>
                    <select
                      className="form-select subject"
                      aria-label="Default select example"
                    >
                      <option selected>This question is about...</option>
                      <option>Registering/Authorising</option>
                      <option>Using Application</option>
                      <option>Troubleshooting</option>
                      <option>Backup/Restore</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Name: </p>
                    <span>Please enter your real name: </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Email Address: </p>
                    <span>
                      Please carefully check your email address for accuracy
                    </span>
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Explain your question in details: </p>
                    <span>
                      Your OS version, Trisfusa version & build, steps you did.
                      Be VERY precise!
                    </span>
                    <textarea
                      className="form-control message"
                      name="message"
                      rows="6"
                      placeholder="I have a problem with..."
                    ></textarea>
                  </div>
                  <div className="col-md-12 mt-15 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn--theme hover--theme submit"
                    >
                      Submit Request
                    </button>
                  </div>
                  <div className="contact-form-notice">
                    <p className="p-sm">
                      We are committed to your privacy. Trisfusa uses the
                      information you provide us to contact you about our
                      relevant content, products, and services. You may
                      unsubscribe from these communications at any time. For
                      more information, check out our{" "}
                      <a href="privicy-policy.php">Privacy Policy</a>.
                    </p>
                  </div>
                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading"></span>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-holder">
                <div className="contact-form contact-details">
                  <p className="p-lg">GET IN TOUCH</p>
                  <span>Address and Contact information</span>
                  <ul>
                    <li>
                      <a href="javascript:;">
                        <span className="flaticon-map"></span> Bachtelstrasse 68
                        CH-8342 Wernetshausen
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@smarthomeconsulting.ch">
                        <span className="flaticon-email"></span>{" "}
                        info@smarthomeconsulting.ch
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.smarthomeconsulting.ch/"
                        target="_blank"
                      >
                        <span className="flaticon-email"></span>{" "}
                        www.smarthomeconsulting.ch
                      </a>
                    </li>
                    <li>
                      <a href="tel:+410449380715">
                        <span className="flaticon-mobile-search"></span> +41 (0)
                        44 938 07 15
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/+410449380715" target="_blank">
                        <span className="flaticon-whatsapp"></span> +41 78 960
                        03 00
                      </a>
                    </li>
                  </ul>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10823.162238489589!2d8.846916165703366!3d47.298892351159445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab85423031c35%3A0x92a81d18677a68ad!2sWernetshausen%2C%208342%20Hinwil%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1695790834251!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
