import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import nodeIco from '../../images/techIcons/nodejs.png';
import reactIco from '../../images/techIcons/react.png';
import rubyIco from '../../images/techIcons/ruby-on-rails.png';
import htmlIco from '../../images/techIcons/html.png';
import cssIco from '../../images/techIcons/css.png';
import bootstrapIco from '../../images/techIcons/bootstrap.png';
import jQueryIco from '../../images/techIcons/jquery.png';
import jestIco from '../../images/techIcons/jest.png';
import sassIco from '../../images/techIcons/sass.png';
import storybookIco from '../../images/techIcons/storybook.png';
import cypressIco from '../../images/techIcons/cypress.png';
import postgresIco from '../../images/techIcons/postgresql.png';
import awsICO from '../../images/techIcons/aws.png';

interface GalleryItemProps {
  id: string;
  source: string;
  thumbnail: string;
  caption: string;
  description: string;
  position: string;
  toggleLightbox: (position: string) => void;
  techStack: string[];
}

export default function GalleryItem({
  id,
  source,
  thumbnail,
  caption,
  description,
  position,
  toggleLightbox,
  techStack,
}: GalleryItemProps) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      toggleLightbox(position);
    },
    [position, toggleLightbox],
  );

  const stackIcons =
    techStack &&
    techStack.map((stack) => {
      const stackUpper = stack.toUpperCase();
      const key = uuidv4();

      switch (stackUpper) {
        case 'NODEJS':
          return (
            <img className="stackIco" key={key} src={nodeIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'REACT':
          return (
            <img className="stackIco" key={key} src={reactIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'HTML':
          return (
            <img className="stackIco" key={key} src={htmlIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'RUBY':
          return (
            <img className="stackIco" key={key} src={rubyIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'SASS':
          return (
            <img className="stackIco" key={key} src={sassIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'CYPRESS':
          return (
            <img className="stackIco" key={key} src={cypressIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'STORYBOOK':
          return (
            <img
              className="stackIco"
              key={key}
              src={storybookIco.src}
              alt={stack}
              title={stack}
              width="25"
              height="25"
            />
          );
        case 'POSTGRESQL':
          return (
            <img
              className="stackIco"
              key={key}
              src={postgresIco.src}
              alt={stack}
              title={stack}
              width="25"
              height="25"
            />
          );
        case 'CSS':
          return (
            <img className="stackIco" key={key} src={cssIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'BOOTSTRAP':
          return (
            <img
              className="stackIco"
              key={key}
              src={bootstrapIco.src}
              alt={stack}
              title={stack}
              width="25"
              height="25"
            />
          );
        case 'JEST':
          return (
            <img className="stackIco" key={key} src={jestIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'JQUERY':
          return (
            <img className="stackIco" key={key} src={jQueryIco.src} alt={stack} title={stack} width="25" height="25" />
          );
        case 'AWS':
          return (
            <img className="stackIco" key={key} src={awsICO.src} alt={stack} title={stack} width="25" height="25" />
          );
        default:
          return null;
      }
    });

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} alt="" />
      </a>
      <span>
        <h3 className="title">{caption}</h3>
        {stackIcons}
      </span>
      <p>{description}</p>
    </article>
  );
}
