import React, { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select, { SelectOption, SelectProps } from '../components/Select/Select';

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
    onChange: {
      action: 'changed',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const SelectWrapper = (args: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(args.value ?? '');

  const onFocus = () => setIsOpen(true);
  const onBlur = () => setIsOpen(false);
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    if (args.onChange) {
      args.onChange(event);
    }
  };

  return (
    <Select
      {...args}
      value={selectedValue}
      isOpen={isOpen}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export const Default: Story = {
  render: (args) => <SelectWrapper {...args} />,
  args: {
    label: 'Choose an option',
    options: options,
    value: '',
    onChange: action('changed'),
    onFocus: () => {},
    onBlur: () => {},
    isOpen: false,
    variant: 'standard',
  },
};

export const ErrorState: Story = {
  render: (args) => <SelectWrapper {...args} />,
  args: {
    label: 'Choose an option',
    options: options,
    value: '',
    onChange: action('changed'),
    onFocus: () => {},
    onBlur: () => {},
    isOpen: false,
    variant: 'outlined',
    error: true,
    helperText: 'Helper text',
  },
};

export const Disabled: Story = {
  render: (args) => <SelectWrapper {...args} />,
  args: {
    label: 'Choose an option',
    options: options,
    value: '1',
    onChange: action('changed'),
    onFocus: () => {},
    onBlur: () => {},
    isOpen: false,
    variant: 'filled',
    disabled: true,
  },
};
