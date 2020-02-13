import React from 'react';
import Header from './Header';
import {ReactComponent as LogoIcon} from '../../assets/icons/logo.svg';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: Header,
  title: 'Header',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

const data = {
  primaryBtnLabel: 'Pitch',
  primaryBtnCallback: () => {},
  secondaryBtnLabel: 'Join',
  secondaryBtnCallback: () => {},
  title: 'Pitchcard',
  IconComponent: LogoIcon
};

export const Default = () => (
  <Header
    {...data}
  ></Header>
);
