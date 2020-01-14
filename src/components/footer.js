import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Blog</h4>
    <p className="text-center">Follow me on Social Media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
