import React from 'react';

// Icons
import { Mobile, Mail, GitHub, Linkedin } from '../../assets/icons/index';

const FooterDetail = () => {
  return (
    <footer id="contact">
      <a
        href="https://www.linkedin.com/in/anderson-cifuentes-b380a7231/"
        target="_blank"
      >
        <Linkedin width={24} height={24} fill="#fff" />
        <span>Linkedin</span>
      </a>
      <a href="https://github.com/oNEOBYTEo" target="_blank">
        <GitHub width={24} height={24} fill="#fff" />
        <span>GitHub</span>
      </a>
      <p className="phone-number">
        <Mobile width={24} height={24} fill="#fff" />
        <span>3213746925</span>
      </p>
      <a
        onClick={() =>
          (window.location = 'mailto:andersoncifuentesdev@gmail.com')
        }
        className="email"
      >
        <Mail width={24} height={24} fill="#fff" />
        <span>andersoncifuentesdev</span>
      </a>
    </footer>
  );
};

export default FooterDetail;
