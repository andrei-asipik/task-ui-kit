import type { Meta, StoryObj } from '@storybook/react';

import Select, { SelectOption } from '../components/Select/Select';

const options: SelectOption[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    variant: {
      control: {
        type: 'radio',
        options: ['standard', 'filled', 'outlined'],
      },
    },
    helperText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    label: 'chose an option',
    variant: 'standard',
    options: options,
  },
};
