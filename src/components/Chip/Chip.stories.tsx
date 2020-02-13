import React from 'react';
import Chip from './Chip';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: Chip,
  title: 'Chip',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

export const Default = () => (
  <Chip
    text={text('Chip Text', 'My Chip')}
    link={text('Chip Link', 'https://www.google.com')}
  ></Chip>
);
