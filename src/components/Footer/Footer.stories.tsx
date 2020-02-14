import React from 'react';
import Footer from './Footer';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: Footer,
  title: 'Footer',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

const contacts = [{name: 'Twitter', link: ''}, {name: 'Bug Report', link: ''}, {name: 'Say Hello', link: ''}];
const infos = [{name: 'Our Mission', link: ''}, {name: 'Pricing', link: ''}];
const languages = [{name: 'English', link: ''}, {name: 'Deutsch', link: ''}, {name: 'Espanol', link: ''}];

const data = {
  contacts,
  infos, 
  languages,
  termsLink: '',
  privacyLink: ''
};

export const Default = () => (
  <Footer
    {...data}
  ></Footer>
);
