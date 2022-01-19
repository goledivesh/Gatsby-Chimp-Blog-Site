import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header>
      <div className="header-logo--wrap">
        <ul>
          <li className="chimp-logo">
            <Link to="/">
              <StaticImage
                src="../images/chimp-logo.svg"
                alt="Chimp Logo"
              ></StaticImage>
            </Link>
          </li>
          <li className="nav-logo-link">
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>
      <nav className="navbar">
        <ul className="ml-auto">
          <li className="nav-cta-link nav-cta-A">
            <Link to="/stories">Stories</Link>
          </li>
          <li className="nav-cta-link nav-cta-B">
            <Link to="/research">Research</Link>
          </li>
          <li className="nav-cta-link nav-cta-C">
            <Link to="/howto">How To</Link>
          </li>
          <li className="nav-cta-link nav-cta-D">
            <Link to="/strategies">Strategies</Link>
          </li>
        </ul>
        <ul className="ml-auto">
          <li className="social-cta-link">
            <a href="https://go.charitableimpact.com/facebook" target="_blank">
              <StaticImage
                src="../images/social-icon-facebook-dark.webp"
                alt="Faceboot"
              />
            </a>
          </li>
          <li className="social-cta-link">
            <a href="https://go.charitableimpact.com/linkedin" target="_blank">
              <StaticImage
                src="../images/social-icon-linkedin-dark.webp"
                alt="Linkedin"
              />
            </a>
          </li>
          <li className="social-cta-link">
            <a href="https://go.charitableimpact.com/twitter" target="_blank">
              <StaticImage
                src="../images/social-icon-twitter-dark.webp"
                alt="Twitter"
              />
            </a>
          </li>
          <li className="social-cta-link">
            <a href="https://go.charitableimpact.com/instagram" target="_blank">
              <StaticImage
                src="../images/social-icon-instagram-dark.webp"
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
