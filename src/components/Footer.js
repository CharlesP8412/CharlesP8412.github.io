import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/CharlesP8412" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/charles-prystupa/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:charles.prystupa@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li> Thanks to &copy;Gatsby Starter Strata</li>
      </ul>
    </div>
  </div>
)

export default Footer
