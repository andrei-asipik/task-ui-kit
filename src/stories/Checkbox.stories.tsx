import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox, { CheckboxProps } from '../components/Checkbox/Checkbox';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxWrapper = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    args.onChange?.(newChecked);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default: Story = {
  args: {
    checked: false,
    label: 'Label',
    onChange: action('changed'),
  },
  render: (args) => <CheckboxWrapper {...args} />,
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled',
    onChange: action('changed'),
  },
  render: (args) => <CheckboxWrapper {...args} />,
};
