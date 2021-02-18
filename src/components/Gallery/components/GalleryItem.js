import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import NodeJS from '../../../assets/images/techIcons/nodejs.png'

const GalleryItem = ({ id, source, thumbnail, caption, description, position, toggleLightbox, stack }) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    const stackList = stack && stack.map((tech) => {
        if (tech === stack[stack.length - 1]) {

            return <img src={tech} alt={``} title={`${tech}`} width="25" height="25" />;
        } else {
            console.log("TECH", tech)
            return (
                <img src={tech} alt={``} title={`${tech}`} width="25" height="25" />
                // `${tech} | `
            );
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
            {stackList}
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