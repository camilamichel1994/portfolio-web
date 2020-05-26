import React from 'react'
import { storiesOf } from '@storybook/react'
import Stepper from '../components/Stepper'
import THEME from '../constants/theme'
import StoryRouter from 'storybook-react-router'


storiesOf('Stepper', Stepper)
  .addDecorator(StoryRouter())
  .add('Default', () => <Stepper theme={THEME.LIGHT} steps={4} />)
  .add('With Back Button', () => <Stepper theme={THEME.LIGHT} steps={4} backTo="/foo" hasBackButton />)
  .add('With Active Step', () => <Stepper theme={THEME.LIGHT} steps={4} backTo="/foo" activeStep="3" />)