import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/default.css";
import "../../assets/css/jquery-ui.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/odometer.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeNutritionFooter from "../../components/partials/Footer/footer";
import LoadingComponent from "../../components/loadingComponent";

function ContactUs() {
  const canonicalUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>About Prep - Premium Supplements for Peak Performance</title>
        <meta
          name="description"
          content="Learn about Prep's mission to provide top-quality supplements for muscle growth, strength, and recovery."
        />
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      <NutritionHeader />
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      <main className="main-area fix">
        <section className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="breadcrumb-content text-center">
                  <h2 className="title">Contact Us</h2>
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item trail-item trail-begin">
                        <a href="index.html">
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="breadcrumb-item trail-item trail-end">
                        <span>Contact Us</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-area">
          <div className="container">
            <div className="contact-box-wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="contact-box">
                    <div className="contact-icon">
                      <span className="overlay-icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <i className="far fa-map"></i>
                    </div>
                    <div className="contact-content">
                      <h5 className="title">Address</h5>
                      <p className="contact-desc">
                        W/n-41, Mithila nagar hemra, dist-begusarai 851101
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="contact-box">
                    <div className="contact-icon">
                      <span className="overlay-icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-content">
                      <h5 className="title">Phone Number</h5>
                      <p className="contact-desc">
                        +91 70791 50883
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="contact-box">
                    <div className="contact-icon">
                      <span className="overlay-icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <i className="fas fa-globe"></i>
                    </div>
                    <div className="contact-content">
                      <h5 className="title">Connect</h5>
                      <p className="contact-desc">
                        prepnutrition35@gmail.com <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div id="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3425.7581309474217!2d86.1364802753885!3d25.40195627757972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI0JzA3LjAiTiA4NsKwMDgnMjAuNiJF!5e1!3m2!1sen!2sin!4v1753426347088!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    height="650"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeNutritionFooter />
    </>
  );
}

export default ContactUs;
