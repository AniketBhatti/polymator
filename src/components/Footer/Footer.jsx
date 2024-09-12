import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="compny-info">
        <Link>
          <img
            src="https://polymator.com/wp-content/uploads/2023/07/polymator-logo-white.png"
            alt=""
          />
        </Link>

        <p>
          Step into a new world of gaming - Where Innovation Meets Expertise.
        </p>

        <div className="get-intouch">
          <h3>Get in Touch</h3>

          <div className="num">
            <img
              src="https://polymator.com/wp-content/themes/polymator/assets/images/us-icon.svg"
              alt=""
            />
            <p>+1 (213) 262-1030</p>
          </div>

          <div className="num">
            <img
              src="https://polymator.com/wp-content/themes/polymator/assets/images/in-icon.svg"
              alt=""
            />
            <p>+91-72030 37070</p>
          </div>

          <div className="email">
            <div className="icon"></div>
            <p>contact@polymator.com</p>
          </div>
        </div>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>

        <ul>
          <li>
            <Link>Home</Link>
          </li>

          <li>
            <Link>About Us</Link>
          </li>

          <li>
            <Link>carreers</Link>
          </li>

          <li>
            <Link>3D Game Art Services</Link>
          </li>

          <li>
            <Link>Game Development</Link>
          </li>

          <li>
            <Link>AR / VR Game Development</Link>
          </li>

          <li>
            <Link>Video Production Services</Link>
          </li>

          <li>
            <Link>Our Work</Link>
          </li>

          <li>
            <Link>Blog</Link>
          </li>

          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="services-footer">
        <h3>Services</h3>

        <ul>
          <li>
            <Link>3D Art for Games</Link>
          </li>

          <li>
            <Link>3D Enviornments Modeling</Link>
          </li>

          <li>
            <Link>3D Characters Modeling</Link>
          </li>

          <li>
            <Link>3D Animation</Link>
          </li>

          <li>
            <Link>Android Game Development</Link>
          </li>

          <li>
            <Link>iOS Game Development</Link>
          </li>

          <li>
            <Link>3D Game Development</Link>
          </li>

          <li>
            <Link>Mobile Game Development</Link>
          </li>

          <li>
            <Link>Unity Game Development</Link>
          </li>

          <li>
            <Link>HTML5 Games Development Company</Link>
          </li>

          <li>
            <Link>AR App Development</Link>
          </li>

          <li>
            <Link>VR App Development</Link>
          </li>

          <li>
            <Link>Metaverse Development</Link>
          </li>
        </ul>
      </div>

      <div className="hire-developers">
        <h3>Hire Developers</h3>

        <ul>
          <li>
            <Link>Hire 3D Artist</Link>
          </li>

          <li>
            <Link>Hire 3D Environment Modelers</Link>
          </li>

          <li>
            <Link>Hire 3D Character Modelers</Link>
          </li>

          <li>
            <Link>Hire 3D Animators</Link>
          </li>

          <li>
            <Link>Hire Android Game Developer</Link>
          </li>

          <li>
            <Link>Hire iOS Game Developers</Link>
          </li>

          <li>
            <Link>Hire 3D Game Developers</Link>
          </li>

          <li>
            <Link>Hire Mobile Game Developer</Link>
          </li>

          <li>
            <Link>Hire Unity Game Developer</Link>
          </li>

          <li>
            <Link>Hire Dedicated HTML5 Game Developers</Link>
          </li>

          <li>
            <Link>Hire Dedicated AR Developers</Link>
          </li>

          <li>
            <Link>Hire Dedicated VR Developers</Link>
          </li>

          <li>
            <Link>Hire Dedicated Metaverse Developers</Link>
          </li>

          <li>
            <Link>Hire Dedicated Video Production Resources</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
