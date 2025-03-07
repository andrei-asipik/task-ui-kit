import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextInput } from '../components/TextInput/TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    value: '',
    onChange: fn(),
    label: 'Enter text',
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'standard',
  },
};

// export const Small: Story = {
//   args: {
//     size: 'small',
//   },
// };

// export const Error: Story = {
//   args: {
//     error: true,
//     helperText: 'This field is required.',
//   },
// };

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//   },
// };
