import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

import nodeIco from '../../../assets/images/techIcons/nodejs.png'
import reactIco from '../../../assets/images/techIcons/react.png'
import rubyIco from '../../../assets/images/techIcons/ruby-on-rails.png'
import htmlIco from '../../../assets/images/techIcons/html.png'
import cssIco from '../../../assets/images/techIcons/css.png'
import bootstrapIco from '../../../assets/images/techIcons/bootstrap.png'
import jQueryIco from '../../../assets/images/techIcons/jquery.png'
import jestIco from '../../../assets/images/techIcons/jest.png'
import sassIco from '../../../assets/images/techIcons/sass.png'
import storybookIco from '../../../assets/images/techIcons/storybook.png'
import cypressIco from '../../../assets/images/techIcons/cypress.png'
import postgresIco from '../../../assets/images/techIcons/postgresql.png'



const GalleryItem = ({ id, source, thumbnail, caption, description, position, toggleLightbox, techStack }) => {
    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    const stackIcons = techStack && techStack.map((stack) => {
        stack = stack.toUpperCase();
        switch (stack) {
            case 'NODEJS':
                return <img className="stackIco" key={uuidv4()} src={nodeIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'REACT':
                return <img className="stackIco" key={uuidv4()} src={reactIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'HTML':
                return <img className="stackIco" key={uuidv4()} src={htmlIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'RUBY':
                return <img className="stackIco" key={uuidv4()} src={rubyIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'SASS':
                return <img className="stackIco" key={uuidv4()} src={sassIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'CYPRESS':
                return <img className="stackIco" key={uuidv4()} src={cypressIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'STORYBOOK':
                return <img className="stackIco" key={uuidv4()} src={storybookIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'POSTGRESQL':
                return <img className="stackIco" key={uuidv4()} src={postgresIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'CSS':
                return <img className="stackIco" key={uuidv4()} src={cssIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'BOOTSTRAP':
                return <img className="stackIco" key={uuidv4()} src={bootstrapIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'JEST':
                return <img className="stackIco" key={uuidv4()} src={jestIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            case 'JQUERY':
                return <img className="stackIco" key={uuidv4()} src={jQueryIco} alt={`${stack}`} title={`${stack}`} width="25" height="25" />;
            default: break;
        }
    });


    return (<article key={id} className="6u 12u$(xsmall) work-item">
        <a
            className="image fit thumb"
            href={source}
            onClick={onClick}
        >
            <img src={thumbnail} alt="" />
        </a>
        {/* CHANGE CLASS NAME IN SCSS FILE to cover both, also make flex spreadout */}
        <span>
            <h3 className="title">{caption}</h3>
            {stackIcons
            }
        </span>
        <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem