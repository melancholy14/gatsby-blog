import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebookF, faTwitter, faInstagram, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';

const FooterLink = ({ href, icon, text }) => (
  <a target="_blank" rel="noopener noreferrer" href={href} style={{ margin: 'auto 1rem' }}>
    <FontAwesomeIcon icon={icon} color="white" />
    <div style={{
      color: 'white',
      display: 'inline-block',
      padding: '0 0.5rem'
    }}>{ text }</div>
  </a>
);

const Footer = () => (<footer style={{
  margin: 'auto',
  position: 'fixed',
  bottom: '0',
  height: '3rem',
  padding: '0.5rem',
  width: '100%',
  textAlign: 'center',
  background: 'slateblue'
}}>
  <FooterLink href="https://github.com/melancholy14" icon={faGithub} text="Github" />
  <FooterLink href="https://www.facebook.com/melancholy14" icon={faFacebookF} text="Facebook" />
  <FooterLink href="https://twitter.com/msg1y15" icon={faTwitter} text="Twitter" />
  <FooterLink href="https://www.instagram.com/1989.3.14" icon={faInstagram} text="Instagram" />
  <FooterLink href="https://www.linkedin.com/in/melancholy14" icon={faLinkedinIn} text="Linkedin" />
</footer>);

export default Footer;