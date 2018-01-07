/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from '../Title';

storiesOf('Title', module)
    .add('without text', () => (
        <Title />
    ))
    .add('with text', () => (
        <Title>tox</Title>
    ));
