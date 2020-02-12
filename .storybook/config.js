import { configure } from '@storybook/react'
import '../src/global.scss';

configure(require.context('../src/components', true, /\.stories\.tsx$/), module)
