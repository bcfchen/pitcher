import React from 'react';
import Button from './Button';
import {ReactComponent as PlusSignIcon } from '../../assets/icons/plus-sign.svg';
import {ReactComponent as JoinIcon } from '../../assets/icons/join.svg';
import { withKnobs, text } from '@storybook/addon-knobs';

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

export const Light = () => (
  <Button
    {...data}
    label={text('Button Label', "Join")}
    theme={'light'}
    IconComponent={JoinIcon}
  ></Button>
);

export const Primary = () => (
  <Button
    {...data}
    label={text('Button Label', "Pitch")}
    theme={'primary'}
    IconComponent={PlusSignIcon}
  ></Button>
);

export const Secondary = () => (
  <Button
    {...data}
    theme={'secondary'}
    label={text('Button Label', "Pitch Now")}
  ></Button>
);

export const Success = () => (
  <Button
    {...data}
    theme={'success'}
    label={text('Button Label', "Pitch Now")}
  ></Button>
);

export const Warning = () => (
  <Button
    {...data}
    theme={'warning'}
    label={text('Button Label', "Pitch Now")}
  ></Button>
);