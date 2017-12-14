// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

// ============================================================
// Container
import SliderItem from './SliderItem';

/**
 * @typedef {Object} SliderSlide
 * @property {string} image
 * @property {string} title
 * @property {string} description
 * @property {string} url
 */

/**
 *
 * @param {Array} url - URL of the image
 * @returns {React.Component}
 * @constructor
 */
function Slider({ slides }) {
    const list = slides.map(slide => <SliderItem {...slide} />);

    return (
        <SlickSlider>
            {list}
        </SlickSlider>
    );
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(SliderItem.propTypes).isRequired,
};

// ============================================================
// Exports
export default Slider;
