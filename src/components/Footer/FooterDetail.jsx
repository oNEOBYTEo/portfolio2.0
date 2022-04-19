import React from 'react';

// Icons
import { Mobile, Mail, GitHub, Linkedin } from '../../assets/icons/index';

const FooterDetail = () => {
  return (
    <footer style={{ background: '#000' }}>
      <p>
        <Mobile width={24} height={24} fill="#fff" />
        <span>3213746925</span>
      </p>
      <p>
        <Mail width={24} height={24} fill="#fff" />
        <span>andersoncifuentes.dev</span>
      </p>
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
    </footer>
  );
};

export default FooterDetail;
