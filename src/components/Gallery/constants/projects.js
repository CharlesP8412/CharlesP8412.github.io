import full01 from '../../../assets/images/fulls/01.jpg'
import full02 from '../../../assets/images/fulls/02.jpg'
import full03 from '../../../assets/images/fulls/03.gif'
import full04 from '../../../assets/images/fulls/04.gif'
import full05 from '../../../assets/images/fulls/05.jpg'
import full06 from '../../../assets/images/fulls/06.jpg'
import thumb01 from '../../../assets/images/thumbs/01.jpg'
import thumb02 from '../../../assets/images/thumbs/02.jpg'
import thumb03 from '../../../assets/images/thumbs/03.jpg'
import thumb04 from '../../../assets/images/thumbs/04.jpg'
import thumb05 from '../../../assets/images/thumbs/05.jpg'
import thumb06 from '../../../assets/images/thumbs/06.jpg'


export const projects = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'BookEnds',
    description: "Book data manager, allowing users to add data about the books they've read and share with friends. Group Collaboration",
    gitub: `https://github.com/dimontejulia/bookends`,
    stack: ['React', 'PostgreSQL ', 'Storybook', 'NodeJS', 'Bootstrap', 'SASS'],
    features: ['Live Search', 'Multiple APIs']
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'PasswordKeepr',
    description: 'Password generator and manager ideal for shared accounts.  Built using NodeJS, Express, EJS, and CSS. Group Collaboration',
    gitub: `https://github.com/dlinardi/PasswordKeepR`,
    stack: ['PostgreSQL ', 'jQuery', 'NodeJS', 'SASS'],
    features: ['Live Search', 'Encryption', 'bcrypt']
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Scheduler',
    description: 'React based Interview Scheduler (SPA), built using TDD methods.',
    gitub: `https://github.com/CharlesP8412/scheduler`,
    stack: ['React', 'mySQL', 'Cypress', 'Jest'],
    features: ['Single Page Application (SPA)', 'JEST', 'Axios', 'CI/CD', 'Cypress',]
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Jungle',
    description: 'Mini E-commerce app built using MVC design, integrates Stripe payments API. Build using EDD.',
    gitub: `https://github.com/CharlesP8412/jungle`,
    stack: ['Ruby', 'Rails', 'PostgreSQL', 'RSpec'],
    features: ['Authentication', 'Capybara', 'StripeAPI', 'RSpec',]
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Tweeter',
    description: 'Single Page Application, Twitter Clone utilizing client side rendering.',
    gitub: `https://github.com/CharlesP8412/tweeter`,
    stack: ['jQuery', 'CSS', 'NodeJS', 'HTML',],
    features: ['Single Page App (SPA)', 'Client Side Rendering',]
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Tiny App',
    description: 'URL Shortening App. Given a url the app will generate a shorter url and act as a relay. (Server-side rendering)',
    gitub: `https://github.com/CharlesP8412/tinyapp`,
    stack: ['NodeJS', 'Express', 'EJS', 'Bootstrap'],
    features: ['Server Side Rendering', 'User Authentication', 'bcrypt', 'Cookie-sessions']
  }
]