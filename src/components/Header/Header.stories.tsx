import React from 'react';
import Header from './Header';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: Header,
  title: 'Header',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

const data = {
  headerLink: '',
  primaryBtnCallback: () => {},
  secondaryBtnCallback: () => {},
};

export const Default = () => (
  <Header
    {...data}
  ></Header>
);
