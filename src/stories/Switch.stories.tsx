import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Switch, { SwitchProps } from '../components/Switch/Switch';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const Switcher = (args: SwitchProps) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    args.onChange?.(newChecked);
  };

  return <Switch {...args} checked={checked} onChange={handleChange} />;
};

export const DefaultSwitch: Story = {
  args: {
    disabled: false,
    checked: true,
    label: 'Label',
    onChange: action('changed'),
  },
  render: (args) => <Switcher {...args} />,
};

export const InactiveSwitch: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Inactive Switch',
    onChange: action('changed'),
  },
  render: (args) => <Switcher {...args} />,
};
