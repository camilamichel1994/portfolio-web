import React from 'react';
import MessageItem from '../components/MessageItem'
import THEME from '../constants/theme'

export default {
  title: 'MessageItem',
  component: MessageItem,
}

const firstName = "Kimberly"
const lastName = "Matlock"
const image = "https://www.fakepersongenerator.com/Face/female/female201710259538088.jpg"

export const Online = () => <MessageItem theme={THEME.LIGHT} firstName={firstName} lastName={lastName} image={image} isOnline />
export const Offline = () => <MessageItem theme={THEME.LIGHT} firstName={firstName} lastName={lastName} image={image} />