import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
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

const NotFoundPage = () => {
  return (
    <Layout>
      <div id="main">
        <h1>NOT FOUND</h1>
        <p>
          That route doesn&#39;t exist...<a href="https://cprystupa.com/">Return to the home</a>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
