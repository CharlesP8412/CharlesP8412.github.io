import * as React from 'react';

import Layout from '../components/layout';
// import Helmet from 'react-helmet';

import Gallery from '../components/Gallery';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: 'Documentation',
  url: 'https://www.gatsbyjs.com/docs/',
  color: '#8954A8',
};

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/getting-started/',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: '#E95800',
  },
  {
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: '#1099A8',
  },
  {
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: '#BC027F',
  },
  {
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    color: '#0D96F2',
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    color: '#8EB814',
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    badge: true,
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    color: '#663399',
  },
];

const IndexPage = () => {
  const [showScroll, setShowScroll] = React.useState(false);
  const siteTitle = 'Chuck Prystupa - Web Developer';
  const siteDescription =
    'Portfolio of Chuck Prystupa, full-stack web developer with a background in IT.  Located in Cambridge Ontario, of the Kitchener-Waterloo region, experienced with remote development.';

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };

  let scrollListener = null;
  if (typeof window !== `undefined`) {
    scrollListener = window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <Layout>
      {/* <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet> */}
      {scrollListener}

      <div id="main">
        <section id="one">
          <article>
            <header className="major">
              <h2>
                Developer, IT Admin, Communications Specialist,&nbsp;
                <br />
                Adaptable Problem Solver
              </h2>
            </header>
            <p>
              As a full-stack developer, I truly enjoy having the ability to shape and sculpt the nerves of the
              information systems we use every day.
              <br />
              I've always gravitated to electronics and technology throughout my life. From developing and experimenting
              with my home lab, to deploying and using radio and information systems in past careers, I am always keen
              to develop new skills and apply my experience and prior skills to find new solutions.
            </p>
          </article>
          <article>
            <p>
              <strong>Languages:</strong> <br />
              Javascript, Ruby, HTML, CSS, SQL <br />
              <strong>Frameworks:</strong> <br />
              React, SASS, Express, Axios, jQuery, EJS, Rails, NodeJS <br />
              <strong>Databases and CMS:</strong> <br />
              PostgreSQL (PSQL), Git, GitLab, Github, Jenkins <br />
              <strong>Testing, CD/CI:</strong> <br />
              JEST, Storybook, Cypress, Mocha, Chai, Rspec, CircleCI, Jenkins <br />
              <strong>Other Skills:</strong> <br />
              Networking, Server, and Desktop Administration, Linux, Project Management
            </p>
          </article>
          <article>
            <p>
              <strong>Education:</strong> <br />
              <strong>
                Lighthouse Labs <br /> Web Development - Jan 2021
              </strong>{' '}
              <br />
              12-week boot camp, teaching JavaScript, Ruby on Rails, React JS, Database and Data Modeling, Automated
              Testing, and Computer Science Fundamentals
              <br />
              <strong>
                Red River College <br /> Advanced Network Technology - May 2005
              </strong>{' '}
              <br />
              Network Administration (CCNP Level), Microsoft Server Administration, Unix, and Wireless Networks <br />
              Graduated with Dean's Honours
            </p>
          </article>
          <ul className="actions">
            <li>
              <span>
                <a
                  href="https://www.canva.com/design/DAESCGsX-ak/Pc4kmpGUT0cMQiZxfJEPiQ/view"
                  className="button"
                  rel="noreferrer"
                  target="_blank"
                >
                  Learn More (Resume)
                </a>
              </span>
            </li>
          </ul>
        </section>

        <section id="two">
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
          <article>
            <h2>Get In Touch</h2>
            <p>
              If you are looking for talent for your company or organization please don't hesitate to contact me. I
              would enjoy discussing how I can contribute to your organization.
            </p>
          </article>
          <div className="row">
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
                  Kitchener-Waterloo, Ontario
                  <br />
                  Canada
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <i
        id="topButton"
        className="icon fa-angle-double-up"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      ></i>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
