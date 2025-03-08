import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['text', 'contained', 'outlined'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
export const Disabled: Story = {
  args: {
    size: 'small',
    children: 'Button',
    disabled: true,
  },
};
