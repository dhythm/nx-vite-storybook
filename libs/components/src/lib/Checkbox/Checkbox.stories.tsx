import { Checkbox } from './Checkbox';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} onChange={action('changed')} />;
};

export const $Checkbox = Template.bind({});
$Checkbox.args = {
  checked: true,
  indeterminate: false,
  disabled: false,
  color: 'primary',
  size: 'medium',
};
