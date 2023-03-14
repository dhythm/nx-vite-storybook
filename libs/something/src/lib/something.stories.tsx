import { ComponentMeta, ComponentStory } from '@storybook/react';
import Something from './something';

export default {
  title: 'Something/index',
  component: Something,
} as ComponentMeta<typeof Something>;

const Template: ComponentStory<typeof Something> = (args) => {
  return <Something {...args} />;
};

export const $Something = Template.bind({});
$Something.args = {};
