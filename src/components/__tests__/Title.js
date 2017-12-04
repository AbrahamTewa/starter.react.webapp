/* eslint-env node, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Title from '../Title';

describe('Basic tests', () => {
    test('Emtpy string', () => {
        let render;
        let shallowComponent;
        let title;

        title = <Title/>;

        // Snapshot
        render           = renderer.create(title);
        expect(render.toJSON()).toMatchSnapshot();

        // Enzyme
        shallowComponent = shallow(title);
        expect(shallowComponent.text()).toEqual('');
    });

    test('Simple string', () => {
        let render;
        let shallowComponent;
        let title;
        let titleText;

        titleText = 'One simple string';
        title = <Title>{titleText}</Title>;

        // Snapshot
        render = renderer.create(title);
        expect(render.toJSON()).toMatchSnapshot();

        // Enzyme
        shallowComponent = shallow(title);
        expect(shallowComponent.text()).toEqual(titleText);
    });
});
