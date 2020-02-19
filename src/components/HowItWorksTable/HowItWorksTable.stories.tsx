import React from 'react';
import HowItWorksTable from './HowItWorksTable';
import { withKnobs } from '@storybook/addon-knobs';
import {ReactComponent as PeopleSmallIcon} from '../../assets/icons/people-small.svg';
import {ReactComponent as PulseSmallIcon} from '../../assets/icons/pulse-small.svg';
import {ReactComponent as LogoSmallIcon} from '../../assets/icons/logo-small.svg';

export default {
  component: HowItWorksTable,
  title: 'HowItWorksTable',
  excludeStories: /.*data$/,
  decorators: [withKnobs],
};

const data = {
  tableItems: [
    {
      title: 'Pitch and Share',
      description: 'Pitch your idea and share it simply with a link.',
      IconComponent: LogoSmallIcon
    },
    {
      title: 'Add Activities',
      description: 'Add activities to get things done quicker.',
      IconComponent: PulseSmallIcon
    },
    {
      title: 'Collaborate',
      description: 'Enjoy quick feedback from your participants.',
      IconComponent: PeopleSmallIcon
    }
  ]
};

export const Default = () => (
  <HowItWorksTable
    {...data}
  ></HowItWorksTable>
);
