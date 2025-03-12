import React, { ChangeEvent, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TextInput, { TextInputProps } from '../components/TextInput/TextInput';

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
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextInputWrapper = (args: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(args.value ?? '');

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    args.onChange?.(event);
  };

  useEffect(() => {
    setInputValue(args.value ?? '');
  }, [args.value]);

  return (
    <TextInput
      {...args}
      isFocused={isFocused}
      value={inputValue}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export const Default: Story = {
  render: (args) => <TextInputWrapper {...args} />,
  args: {
    label: 'Enter text',
    value: '',
    variant: 'standard',
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    isFocused: false,
  },
};
export const ErrorState: Story = {
  render: (args) => <TextInputWrapper {...args} />,
  args: {
    label: 'Enter text',
    value: '',
    variant: 'outlined',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    isFocused: false,
    error: true,
    helperText: 'This field is required',
  },
};

export const Disabled: Story = {
  render: (args) => <TextInputWrapper {...args} />,
  args: {
    label: 'Enter text',
    variant: 'filled',
    value: 'Disabled text',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    isFocused: false,
    disabled: true,
  },
};
