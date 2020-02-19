import React from 'react';
import HomePageTitle from './HomePageTitle';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: HomePageTitle,
  title: 'HomePageTitle',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

const data = {
  mainTextTop: '',
  mainTextBottom: '',
  subTextTop: '',
  subTextBottom: '',
  textBoxPlaceholder: '',
  onSubmit: () => {},
  linkText: ''
};

export const Default = () => (
  <HomePageTitle
    {...data}
    mainTextTop={text('Main Text Top', 'Pitch')}
    mainTextBottom={text('Main Text Bottom', 'Anything to Everyone')}
    subTextTop={text('Sub Text Top', 'Pitch your idea by simply sharing a link.')}
    subTextBottom={text('Sub Text Bottom', 'Participate without the need of an app or user account.')}
    textBoxPlaceholder={text('TextBox Placeholder', 'Pitch your idea...')}
    linkText={text('Link Text', 'Explore Ideas')}
  ></HomePageTitle>
);
