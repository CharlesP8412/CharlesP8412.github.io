import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import nodeIco from '../../../assets/images/techIcons/nodejs.png'
import reactIco from '../../../assets/images/techIcons/react.png'
import rubyIco from '../../../assets/images/techIcons/ruby.png'
import htmlIco from '../../../assets/images/techIcons/html.png'
// import cssIco from '../../../assets/images/techIcons/css.png'
import jQueryIco from '../../../assets/images/techIcons/jquery.png'
import jsIco from '../../../assets/images/techIcons/js.png'
import sassIco from '../../../assets/images/techIcons/sass.png'
import storybookIco from '../../../assets/images/techIcons/storybook.png'



const GalleryItem = ({ id, source, thumbnail, caption, description, position, toggleLightbox, stack }) => {
    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    const stackIcons = stack && stack.map((tech) => {
        console.log("TESC", tech)
        tech = tech.toUpperCase();
        switch (tech) {
            case 'NODEJS':
                return <img src={nodeIco} alt={`${tech}`} title={`${tech}`} width="25" height="25" />;
            case 'REACT':
                return <img src={reactIco} alt={``} title={`${tech}`} width="35" height="25" />;
            case 'HTML':
                return <img src={htmlIco} alt={``} title={`${tech}`} width="35" height="25" />;
            case 'RUBY':
                return <img src={rubyIco} alt={``} title={`${tech}`} width="35" height="25" />;
            case 'JQUERY':
                return <img src={jQueryIco} alt={``} title={`${tech}`} width="35" height="25" />;

            default: break;
        }

        // if (tech === 'NodeJS') {
        //     test = NodeJS
        // }
        // if (tech === stack[stack.length - 1]) {

        //     return <img src={test} alt={``} title={`${tech}`} width="25" height="25" />;
        // } else {
        //     console.log("TECH", tech)
        //     return (
        //         <img src={test} alt={``} title={`${tech} `} width="25" height="25" />
        //         // `${ tech } | `
        //     );
        // }
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