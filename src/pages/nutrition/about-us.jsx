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

function AboutUs() {
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
                  <h2 className="title">About Us</h2>
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item trail-item trail-begin">
                        <a href="/">
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="breadcrumb-item trail-item trail-end">
                        <span>About Us</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="blog--post--item">
                  <div className="blog--post--content blog-details-content">
                    <h2 className="blog--post--title">
                      Company Laws Today and Their Relevance to Prep Nutrition
                    </h2>
                    <div className="post-text">
                      <p>
                        In the dynamic business environment of India, company laws play a crucial role in ensuring transparency, accountability, and compliance. For a growing nutritional supplement brand like Prep Nutrition, based in Begusarai, Bihar, and utilizing third-party manufacturing through Gomzi Life Science, a strong understanding of today's corporate legal landscape is essential. Adhering to current legal requirements fosters trust among consumers and partners while shielding the company from legal risks.
                      </p>

                      <div className="blog-details-wrap">
                        <h3 className="title">Understanding Company Laws in India (2025 Update)</h3>
                        <p>
                          India's company law is primarily governed by the Companies Act, 2013, regulated by the Ministry of Corporate Affairs (MCA), along with other applicable laws such as:
                        </p>
                        <div className="b-details-list">
                          <br /><ul className="list-wrap">
                            <li><i className="fas fa-check"></i> Food Safety and Standards Act, 2006 (FSSAI) - for nutritional and food products.</li>
                            <li><i className="fas fa-check"></i> Legal Metrology Act, 2009 - for packaging, weights, and labeling.</li>
                            <li><i className="fas fa-check"></i> Consumer Protection Act, 2019 - for safeguarding consumer rights.</li>
                            <li><i className="fas fa-check"></i> GST Act, 2017 - for tax compliance.</li>
                            <li><i className="fas fa-check"></i> The Trademark Act, 1999 - for protecting brand identity.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="blog-details-wrap">
                        <h3 className="title">1. Business Structure and Registration</h3>
                        <p>
                          Prep Nutrition must operate under a valid business structure. Common structures include:
                        </p>
                        <div className="b-details-list">
                          <br /><ul className="list-wrap">
                            <li><i className="fas fa-check"></i> Proprietorship</li>
                            <li><i className="fas fa-check"></i> Partnership</li>
                            <li><i className="fas fa-check"></i> Limited Liability Partnership (LLP)</li>
                            <li><i className="fas fa-check"></i> Private Limited Company</li>
                          </ul>
                        </div>
                        <br />
                        <p>
                          For scalability and compliance, a Private Limited Company is often preferred. Once incorporated, Prep Nutrition must obtain:
                        </p>
                        <div className="b-details-list">
                          <br /><ul className="list-wrap">
                            <li><i className="fas fa-check"></i> GST Registration</li>
                            <li><i className="fas fa-check"></i> FSSAI License</li>
                            <li><i className="fas fa-check"></i> Trade License (local)</li>
                            <li><i className="fas fa-check"></i> Import Export Code (if exporting)</li>
                            <li><i className="fas fa-check"></i> Udyam Registration (for MSME benefits)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="blog-details-wrap">
                        <h3 className="title">2. Manufacturing Agreement: 3rd Party Manufacturing</h3>
                        <p>
                          Since Prep Nutrition uses Gomzi Life Science for manufacturing, it falls under contract manufacturing or third-party manufacturing. Legal elements involved:
                        </p>
                        <p>A clear manufacturing agreement must be executed stating:</p>
                        <div className="b-details-list">
                          <br /><ul className="list-wrap">
                            <li><i className="fas fa-check"></i> Ownership of brand and formula (if any)</li>
                            <li><i className="fas fa-check"></i> Liability and indemnification clauses</li>
                            <li><i className="fas fa-check"></i> Batch-wise delivery timelines</li>
                            <li><i className="fas fa-check"></i> Quality control and compliance clauses</li>
                            <li><i className="fas fa-check"></i> Confidentiality and IP protection</li>
                            <li><i className="fas fa-check"></i> GMP and FSSAI adherence</li>
                          </ul>
                        </div>
                        <p>
                          Prep Nutrition remains legally liable for the product quality under FSSAI and Consumer Protection laws, despite outsourcing production.
                        </p>
                      </div>

                      <div className="blog-details-wrap">
                        <h3 className="title">3. Labeling and Packaging Laws</h3>
                        <p>Labeling must comply with:</p>
                        <div className="b-details-list">
                          <br /><ul className="list-wrap">
                            <li><i className="fas fa-check"></i> FSSAI Guidelines - nutritional info, allergen warnings, batch number, MRP, license number.</li>
                            <li><i className="fas fa-check"></i> Legal Metrology (Packaged Commodities) Rules, 2011 - net quantity, manufacturing date, expiry, and customer care info.</li>
                            <li><i className="fas fa-check"></i> No misleading claims - health benefits must be backed by research or approved by FSSAI.</li>
                          </ul>
                        </div>
                        <p>
                          Non-compliance can lead to penalties, license suspension, or product recalls.
                        </p>
                      </div>

                      <div className="blog-details-wrap">
                        <h3 className="title">4. Advertising and E-Commerce Regulations</h3>
                        <p>
                          Prep Nutrition must comply with the Advertising Standards Council of India (ASCI) and Consumer Protection (E-commerce) Rules, 2020. Guidelines include:
                        </p>
                        <div className="b-details-list">
                          <br /><ul className="list-wrap">
                            <li><i className="fas fa-check"></i> No false health claims</li>
                            <li><i className="fas fa-check"></i> Disclaimers on testimonials or influencer marketing</li>
                            <li><i className="fas fa-check"></i> Transparent return and refund policy</li>
                            <li><i className="fas fa-check"></i> Secure data handling (as per Digital Personal Data Protection Act, 2023)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="blog-details-wrap">
                        <h3 className="title">5. Tax Compliance and Filings</h3>
                        <div className="b-details-list">
                          <br /><ul className="list-wrap">
                            <li><i className="fas fa-check"></i> GST must be charged, collected, and filed monthly (GSTR-1 & GSTR-3B).</li>
                            <li><i className="fas fa-check"></i> Income tax filing annually</li>
                            <li><i className="fas fa-check"></i> TDS compliance if hiring employees or freelancers</li>
                            <li><i className="fas fa-check"></i> Audit (if turnover &gt; specified limits)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="blog-details-wrap">
                        <h3 className="title">Sample Terms & Conditions for Prep Nutrition</h3>
                        <ul className="list-wrap list-wrap-li">
                          <li><strong>1. General:</strong> Welcome to Prep Nutrition. By accessing or using our products or services, you agree to be bound by the following terms and conditions. These may be updated from time to time as per applicable laws.</li><br />
                          <li><strong>2. Product Information:</strong> Prep Nutrition sells dietary supplements manufactured by third-party certified partners like Gomzi Life Science. All products comply with FSSAI guidelines. Products are not intended to diagnose, treat, or prevent any disease.</li><br />
                          <li><strong>3. Orders and Pricing:</strong> Prices are inclusive of applicable GST. Orders once placed cannot be modified. We reserve the right to revise pricing and discontinue products without prior notice.</li><br />
                          <li><strong>4. Shipping & Delivery:</strong> We deliver PAN India via registered courier partners. Estimated delivery time is 5-7 working days.</li><br />
                          <li><strong>5. Returns and Refunds:</strong> Products once opened are not eligible for return. Refunds are processed only if products are defective, damaged, or incorrectly delivered, subject to verification.</li><br />
                          <li><strong>6. Intellectual Property:</strong> All content, logo, packaging, and brand identity are the property of Prep Nutrition and are protected under The Trademark Act, 1999.</li><br />
                          <li><strong>7. Disclaimer:</strong> Always consult a healthcare professional before beginning any dietary supplement. Individual results may vary.</li><br />
                          <li><strong>8. Governing Law:</strong> These terms are governed by the laws of India. Any disputes arising will be subject to the jurisdiction of courts in Begusarai, Bihar.</li><br />
                        </ul>
                      </div>

                      <div className="blog-details-wrap">
                        <h3 className="title">Stay Compliant. Stay Trusted.</h3>
                      </div>
                    </div>
                  </div>
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

export default AboutUs;
