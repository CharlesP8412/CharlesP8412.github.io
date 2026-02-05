import bookEndsFull from '../images/fulls/01.jpg';
import keeprFull from '../images/fulls/02.jpg';
import schedulerFull from '../images/fulls/03.gif';
import jungleFull from '../images/fulls/04.gif';
import tweeterFull from '../images/fulls/05.jpg';
import tinyAppFull from '../images/fulls/06.jpg';
import bookEndsThumb from '../images/thumbs/01.jpg';
import keeprThumb from '../images/thumbs/02.jpg';
import schedulerThumb from '../images/thumbs/03.jpg';
import jungleThumb from '../images/thumbs/04.jpg';
import tweeterThumb from '../images/thumbs/05.jpg';
import tinyAppThumb from '../images/thumbs/06.jpg';
import landonFull from '../images/fulls/07.png';
import landonThumb from '../images/fulls/07.png';

export interface Project {
  id: string;
  source: string;
  thumbnail: string;
  caption: string;
  description: string;
  gitHubLink: string;
  stack: string[];
  features: string[];
  demoLink?: string;
  longDescription?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    source: bookEndsFull.src,
    thumbnail: bookEndsThumb.src,
    caption: 'BookEnds',
    description:
      "Book data manager, allowing users to add data about the books they've read and share with friends. Group Collaboration",
    gitHubLink: `https://github.com/dimontejulia/bookends`,
    stack: ['React', 'PostgreSQL ', 'Storybook', 'NodeJS', 'Bootstrap', 'SASS'],
    features: ['Live Search', 'Multiple APIs', 'Bookclubs for Users', 'User & club status updates'],
  },
  {
    id: '2',
    source: keeprFull.src,
    thumbnail: keeprThumb.src,
    caption: 'PasswordKeepr',
    description:
      'Password generator and manager ideal for shared accounts.  Built using NodeJS, Express, EJS, and CSS. Group Collaboration',
    gitHubLink: `https://github.com/dlinardi/PasswordKeepR`,
    stack: ['PostgreSQL ', 'jQuery', 'NodeJS', 'SASS'],
    features: ['Live Search', 'Encryption', 'bcrypt'],
    longDescription:
      'Allows a user to create multiple vaults / organizations that can generate and store passwords. Vaults can also be shared with other user (ie Company Social media account for marketing dept. or Streaming services for a family)',
  },
  {
    id: '3',
    source: schedulerFull.src,
    thumbnail: schedulerThumb.src,
    caption: 'Scheduler',
    description: 'Interview Scheduler (SPA) based in React, built using Test Driven Development.',
    gitHubLink: `https://github.com/CharlesP8412/scheduler`,
    demoLink: `https://scheduler-cvp.netlify.app/`,
    stack: ['React', 'Storybook', 'mySQL', 'Cypress', 'Jest'],
    features: ['Single Page Application (SPA)', 'Custom Hooks', 'Error Fallback'],
    longDescription: 'Note: Demo DB API is hosted on heroku and may take a minute to wake up',
  },
  {
    id: '4',
    source: jungleFull.src,
    thumbnail: jungleThumb.src,
    caption: 'Jungle',
    description: 'Mini E-commerce app built using MVC design, integrates Stripe payments API. Build using EDD.',
    gitHubLink: `https://github.com/CharlesP8412/jungle`,
    stack: ['Ruby', 'Rails', 'PostgreSQL', 'RSpec'],
    features: ['Promotion Planner', 'Capybara', 'StripeAPI', 'Admin Dashboard'],
    longDescription: 'Inheritted code, fixed various functions and added new features ',
  },
  {
    id: '7',
    source: landonFull.src,
    thumbnail: landonThumb.src,
    caption: 'Landon Hotel',
    description: 'Coverted legacy HTML site to React and deploy on AWS',
    gitHubLink: `https://github.com/CharlesP8412/ll-landon`,
    stack: ['React', 'AWS', 'HTML'],
    features: ['AWS Amplify', 'DynamoDB', 'AWS Lambda', 'AWS CLI'],
    longDescription: `Guided by LinkedIn Learning`,
  },
  {
    id: '5',
    source: tweeterFull.src,
    thumbnail: tweeterThumb.src,
    caption: 'Tweeter',
    description: 'Single Page Application, Twitter Clone utilizing client side rendering.',
    gitHubLink: `https://github.com/CharlesP8412/tweeter`,
    stack: ['jQuery', 'NodeJS', 'HTML', 'CSS'],
    features: ['Single Page App (SPA)', 'Client Side Rendering'],
  },
  {
    id: '6',
    source: tinyAppFull.src,
    thumbnail: tinyAppThumb.src,
    caption: 'Tiny App',
    description:
      'URL Shortening App. Given a url the app will generate a shorter url and act as a relay. (Server-side rendering)',
    gitHubLink: `https://github.com/CharlesP8412/tinyapp`,
    stack: ['Bootstrap', 'NodeJS', 'HTML', 'CSS', 'Mocha', 'Chai'],
    features: ['Server Side Rendering', 'User Authentication', 'bcrypt', 'Cookie-sessions'],
  },
];
