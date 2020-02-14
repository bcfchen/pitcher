import React from 'react';
import SubmitButton from './SubmitButton';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  component: SubmitButton,
  title: 'SubmitButton',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

const data = {
  onSubmit: () => alert('hi'),
};

export const Default = () => (
  <SubmitButton
    {...data}
  ></SubmitButton>
);
