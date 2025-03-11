import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button/Button';
import { action } from '@storybook/addon-actions';

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
    onClick: {
      action: 'click',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSizes: Story = {
  args: {
    variant: 'contained',
    disabled: false,
    onClick: () => {},
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Button {...args} size="small" onClick={action('Small Button clicked')}>
        Small
      </Button>
      <Button {...args} size="medium" onClick={action('Medium Button clicked')}>
        Medium
      </Button>
      <Button {...args} size="large" onClick={action('Large Button clicked')}>
        Large
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    size: 'medium',
    disabled: false,
    onClick: () => {},
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Button {...args} variant="contained" onClick={action('Contained Button clicked')}>
        Contained
      </Button>
      <Button {...args} variant="text" onClick={action('Text Button clicked')}>
        Text
      </Button>
      <Button {...args} variant="outlined" onClick={action('Outlined Button clicked')}>
        Outlined
      </Button>
    </div>
  ),
};

export const AllDisabledVariants: Story = {
  args: {
    size: 'medium',
    disabled: true,
    onClick: () => {},
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Button {...args} variant="contained">
        Contained
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
    </div>
  ),
};
