import React from 'react';
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => <Button title="Default" onClick={action('clicked')} />
export const Danger = () => <Button title="Danger" color="danger" onClick={action('clicked')} />
export const Warning = () => <Button title="Warning" color="warning" onClick={action('clicked')} />
export const Success = () => <Button title="Success" color="success" onClick={action('clicked')} />
export const Disabled = () => <Button title="Disabled" disabled onClick={action('clicked')} />

export const DefaultOutlined = () => <Button title="Default" outlined onClick={action('clicked')} />
export const DangerOutlined = () => <Button title="Danger" outlined color="danger" onClick={action('clicked')} />
export const WarningOutlined = () => <Button title="Warning" outlined color="warning" onClick={action('clicked')} />
export const SuccessOutlined = () => <Button title="Success" outlined color="success" onClick={action('clicked')} />
export const DisabledOutlined = () => <Button title="Disabled" outlined disabled onClick={action('clicked')} />
