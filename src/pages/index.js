import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Chuck Prystupa - Web Developer'
  const siteDescription = 'Portfolio of Chuck Prystupa'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Developer, IT Admin, Communications Specialist,&nbsp;
              <br />
              Adaptable Problem Solver
            </h2>
          </header>
          <p>
            As a full stack developer, I truly enjoy having the ability to shape and sculpt
            the nerves of the information systems we use every day.
            <br />
            I've always gravitated to electronics and technology throughout my life.
            From developing and experimenting with my home lab, to deploying and using radio and information systems in past careers,
            I am always keen to develop new skills and apply my experience and prior skills to find new solutions.
          </p>
          <ul className="actions">
            <li>
              <span>
                <a href="https://www.canva.com/design/DAESCGsX-ak/Pc4kmpGUT0cMQiZxfJEPiQ/view" className="button" rel="noreferrer" target="_blank">
                  Learn More (Resume)
                </a>
              </span>
            </li>
          </ul>
          <p>
            <strong>Languages:</strong> <br />
            Javascript, Ruby, HTML, CSS, SQL  <br />
            <strong>Frameworks:</strong> <br />
            React, SASS, Express, Axios, jQuery, EJS, Rails, NodeJS  <br />
            <strong>Databases and CMS:</strong> <br />
            PostgreSQL (PSQL), Git, GitLab, Github, Jenkins  <br />
            <strong>Testing, CD/CI:</strong> <br />
            JEST, Storybook, Cypress, Mocha, Chai, Rspec, CircleCI, Jenkins  <br />
            <strong>Other Skills:</strong> <br />
            Networking (Cisco), Server and Desktop Admin (Microsoft), Linux, Project Management
           </p>

        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="https://github.com/CharlesP8412" className="button">
                GitHub Projects
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            If you are looking for talent for your company or organization
            please don't hesitate to contact me.
            I would enjoy discussing how I can contribute to your organization.
          </p>
          <div className="row">
            {/* <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div> */}
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:charles.prystupa@gmail.com">charles.prystupa@gmail.com</a>
                </li>
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Cambridge, Ontario
                  <br />
                  Canada
                </li>

              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
