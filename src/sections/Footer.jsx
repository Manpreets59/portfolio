import { socialImgs } from "../constants";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Built with React, Three.js & GSAP</p>
        </div>
        <div className="socials">
          {socialImgs.map((social) => (
            <a
              key={social.name}
              className="icon"
              href={social.link}
              target={social.name === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={social.name}
            >
              <SocialIcon name={social.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Manpreet Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
