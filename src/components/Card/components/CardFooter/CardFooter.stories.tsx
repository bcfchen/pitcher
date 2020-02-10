import React from 'react'
import CardFooter from './CardFooter'
import { withKnobs, text, number } from '@storybook/addon-knobs'

export type CardFooterProps = {
  imageUrl: string,
  userName: string,
  numberOfParticipants: number,
  submissionDate: string
};

export default {
  component: CardFooter,
  title: 'CardFooter',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

export const data = {
  imageUrl: '',
  userName: '',
  numberOfParticipants: 0,
  submissionDate: ''
};

export const Default = () => (
  <CardFooter
    {...data}
    imageUrl={text('Icon URL', '')}
    userName={text('User Name', 'My user name')}
    numberOfParticipants={number('Num of Participants', 0)}
    submissionDate={text('Submission Date', '2020/01/01')}
  ></CardFooter>
);
