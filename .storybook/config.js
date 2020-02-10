// .storybook/config.js

import { configure } from '@storybook/react'
// import '../build/static/css/main.a957beec.chunk.css'

configure(require.context('../src/components', true, /\.stories\.tsx$/), module)
