/* eslint-env node, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Title from '../Title';

describe('Basic tests', () => {
    test('Emtpy string', () => {
        const title = <Title />;
        // Snapshot
        const render = renderer.create(title);
        expect(render.toJSON()).toMatchSnapshot();

        // Enzyme
        const shallowComponent = shallow(title);
        expect(shallowComponent.text()).toEqual('');
    });

    test('Simple string', () => {
        const titleText = 'One simple string';
        const title = <Title>{titleText}</Title>;

        // Snapshot
        const render = renderer.create(title);
        expect(render.toJSON()).toMatchSnapshot();

        // Enzyme
        const shallowComponent = shallow(title);
        expect(shallowComponent.text()).toEqual(titleText);
    });
});
