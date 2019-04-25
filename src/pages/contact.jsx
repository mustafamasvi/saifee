import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaPhone, FaMobile, FaMapMarker } from "react-icons/lib/fa/";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
        You can get in touch <span>anytime through</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="shabbir_dhinojwala@yahoo.com" />
        </li>
        <li className="c-contact-list__item">
          <FaMobile />
          <Obfuscate tel="9886074251" />
        </li>
        <li className="c-contact-list__item">
          <FaPhone />
          <Obfuscate tel="080-41243623" /> /  <Obfuscate tel="080-42040661" />
        </li>
        <li className="c-contact-list__item">
          <FaMapMarker />
          <a
            href="https://goo.gl/maps/Ci1qh4VjFYnVaoAW7"
            target="_blank"
            rel="noopener noreferrer"
          >
            No.12, Shop No.1, Ground Floor, Dresser Rajappa Lane, Bangalore - 560 002.
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>
    </div>
  );
};
