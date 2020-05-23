import React from 'react';
import PanelItem from '../components/PanelItem'
import THEME from '../constants/theme'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'PanelItem',
  component: PanelItem,
}

const title = "Hello World"
const description = "Lorem ipsum dolor sit amet"

export const Default = () => 
  <PanelItem theme={THEME.LIGHT} color={THEME.LIGHT.FIELDS.SUCCESS} icon={faAddressCard} title={title} description={description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed quam tristique, accumsan lorem ut, hendrerit eros. 
    Vivamus nulla nibh, porta non pretium non, ultricies dapibus metus. Sed in bibendum purus. Cras vestibulum vestibulum ipsum non porttitor. 
    Vestibulum sapien nibh, sollicitudin egestas nisi sit amet, rutrum tristique justo.
  </PanelItem>