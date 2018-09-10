import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="newsletter-area border-top ptb-110">
          <div className="container">
            <div className="section-title-2 text-center">
              <span>
                <span className="text-red">Special Offers</span> For Subscribers
              </span>
              <h3>Ten Percent Member Discount</h3>
              <p>
                Subscribe to our newsletters now and stay up to date with new
                collections, the latest lookbooks and exclusive offers.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="newsletter-form mc_embed_signup">
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    novalidate
                  >
                    <div id="mc_embed_signup_scroll" className="mc-form">
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        className="email"
                        id="mce-EMAIL"
                        placeholder="Email Address"
                        required
                      />

                      <div className="mc-news" aria-hidden="true">
                        <input
                          type="text"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                          tabindex="-1"
                          value=""
                        />
                      </div>
                      <button
                        id="mc-embedded-subscribe"
                        type="submit"
                        name="subscribe"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-area bg-dark-1 pt-90">
          <div className="container">
            <div className="footer-top pb-90">
              <div className="row">
                <div className="col-xl-5 col-lg-4 col-md-12">
                  <div className="single-footer-widget">
                    <h4 className="footer-title">About Us</h4>
                    <p>
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod mazim placerat facer possim
                      assum...
                    </p>
                    <a href="https://d29u17ylf1ylz9.cloudfront.net/nego-v3/about.html">
                      Readmore
                    </a>
                  </div>
                  <div className="single-footer-widget social-container">
                    <h4 className="footer-title">Follow Us On Social:</h4>
                    <div className="social-link">
                      <a href="#" target="_blank" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" target="_blank" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#" target="_blank" className="linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href="#" target="_blank" className="rss">
                        <i className="fa fa-rss" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <div className="single-footer-widget">
                    <h4 className="footer-title">Information</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="https://d29u17ylf1ylz9.cloudfront.net/nego-v3/about.html">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="https://d29u17ylf1ylz9.cloudfront.net/nego-v3/contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#">Partners</a>
                      </li>
                      <li>
                        <a href="#">Become an affiliate</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <div className="single-footer-widget">
                    <h4 className="footer-title">My account</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="https://d29u17ylf1ylz9.cloudfront.net/nego-v3/account.html">
                          My Account
                        </a>
                      </li>
                      <li>
                        <a href="https://d29u17ylf1ylz9.cloudfront.net/nego-v3/wishlist.html">
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">Order Tracking</a>
                      </li>
                      <li>
                        <a href="#">Shipping Information</a>
                      </li>
                      <li>
                        <a href="#">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="footer-text">
                    <span>
                      Copyright &copy; 2018 <a href="#">Nego</a>. All rights
                      reserved.
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="payment-img justify-content-end d-flex">
                    <img
                      src="https://d29u17ylf1ylz9.cloudfront.net/nego-v3/assets/img/payment.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;