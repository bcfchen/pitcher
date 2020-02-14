import React from 'react';
import TextBox from './TextBox';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: TextBox,
  title: 'TextBox',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

const data = {
  placeholderText: '',
  onSubmit: () => alert('hi'),
};

export const Default = () => (
  <TextBox
    {...data}
    placeholderText={text('TextBox Placeholder', 'Pitch Your Idea...')}
  ></TextBox>
);
