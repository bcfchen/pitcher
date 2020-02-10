import React from 'react'
import Card from './Card'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: Card,
  title: 'Card',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

export const data = {
  title: '',
  category: ''
};

export const Default = () => (
  <Card
    {...data}
    title={text('Title Text', 'My Title')}
    category={text('Category Text', 'My Category')}
  ></Card>
);
