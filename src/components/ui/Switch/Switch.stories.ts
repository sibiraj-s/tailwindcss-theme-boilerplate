import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Switch',
  args: {}
};
