import React from 'react';
import Button from './Button';
import {ReactComponent as PlusSignIcon } from '../../assets/icons/plus-sign.svg';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

export const data = {
  label: 'label',
  theme: 'primary',
  url: 'www.cnn.com',
  IconComponent: undefined
};

export const Default = () => (
  <Button
    {...data}
    theme={'default'}
  ></Button>
);

export const Primary = () => (
  <Button
    {...data}
    theme={'primary'}
    IconComponent={PlusSignIcon}
  ></Button>
);

