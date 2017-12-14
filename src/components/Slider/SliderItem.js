// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Container

/**
 * @typedef {Object} SliderSlide
 * @property {string} image
 * @property {string} title
 * @property {string} description
 * @property {string} url
 */

function SliderItem({
    description, image, link, title,
}) {
    let imageComponent;
    let descriptionComponent;
    let titleComponent;

    if (title) {
        titleComponent = <h3>{title}</h3>;
    }

    if (description) {
        descriptionComponent = <p>{description}</p>;
    }

    if (image) {
        imageComponent = <img src={image} alt={title} />;
    }

    return (
        <div key={link}>
            <a href={link}>
                {imageComponent}
                {titleComponent}
                {descriptionComponent}
            </a>
        </div>
    );
}

SliderItem.defaultProps = {
    description: '',
    image: '',
    link: '',
    title: '',
};

SliderItem.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
};

export default SliderItem;
