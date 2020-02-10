import React from 'react'
import CardChip from './CardChip'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: CardChip,
  title: 'CardChip',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

export const data = {
  text: ''
};

export const Default = () => (
  <CardChip
    {...data}
    text={text('Card Chip Text', 'Productivity')}
  ></CardChip>
);
