import React from 'react';
import Card from './Card';
import {ReactComponent as EmployeeProject} from '../../assets/icons/employee-project.svg';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  component: Card,
  title: 'Card',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

export const data = {
  title: '',
  category: '',
  imageUrl: '',
  userName: '',
  numberOfParticipants: 0,
  submissionDate: '',
  IconComponent: EmployeeProject
};

export const Default = () => (
  <Card
    {...data}
    title={text('Title Text', 'My Title')}
    category={text('Category Text', 'My Category')}
    imageUrl={text('Image Url', '')}
    userName={text('User Name', 'Some User Name')}
    numberOfParticipants={number('Number of Participants', 0)}
    submissionDate={text('Submission Date', '2019-10-10')}
  ></Card>
);
