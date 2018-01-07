/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

import { configure } from '@storybook/react';

function loadStories() {
    import('../src/__stories__');
}

configure(loadStories, module);
