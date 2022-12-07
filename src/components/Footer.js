import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Shopee - fun, reliable, safe online shopping app free! Shopee is
              the leading online commerce platform in Southeast Asia,
              headquarter in Singapore, present all over the world Singapore,
              Malaysia, Indonesia, Thailand, Philippines, Taiwan, Brazil,
              Mexico, Colombia, Poland and Spain. with assurance Shopee
              guarantees, you will buy goods online safely and quickly more than
              ever!
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Customer care</h6>
            <ul className="footer-links">
              <li>
                <Link to="#">Help center</Link>
              </li>
              <li>
                <Link to="#">Hotline</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Contribute</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <Link to="#">Mink</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
