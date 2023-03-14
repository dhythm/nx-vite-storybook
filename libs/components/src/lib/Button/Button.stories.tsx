import { Button } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} onClick={action('clicked')} />;
};

export const $Button = Template.bind({});
$Button.args = {
  variant: 'contained',
  color: 'primary',
  size: 'large',
  children: 'submit',
  disabled: false,
};
