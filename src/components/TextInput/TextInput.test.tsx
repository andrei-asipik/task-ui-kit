import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput, { TextInputProps } from './TextInput';

const defaultProps: TextInputProps = {
  label: 'Test Label',
  value: '',
  onChange: jest.fn(),
  isFocused: false,
  onFocus: jest.fn(),
  onBlur: jest.fn(),
  variant: 'standard',
  error: false,
  disabled: false,
  required: false,
  helperText: '',
  className: '',
};

describe('TextInput component', () => {
  test('renders correctly with default props', () => {
    render(<TextInput {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders label with required asterisk when required', () => {
    render(<TextInput {...defaultProps} required />);
    expect(screen.getByText('Test Label*')).toBeInTheDocument();
  });

  test('renders error message when error is true', () => {
    render(<TextInput {...defaultProps} error helperText="Error message" />);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    render(<TextInput {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('calls onFocus and onBlur when input is focused and blurred', () => {
    render(<TextInput {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    expect(defaultProps.onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(defaultProps.onBlur).toHaveBeenCalled();
  });

  test('renders disabled input when disabled is true', () => {
    render(<TextInput {...defaultProps} disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('renders correct class when variant is changed', () => {
    const { rerender } = render(<TextInput {...defaultProps} variant="filled" />);
    expect(screen.getByRole('textbox')).toHaveClass('inputFilled');
    rerender(<TextInput {...defaultProps} variant="outlined" />);
    expect(screen.getByRole('textbox')).toHaveClass('inputOutlined');
  });

  test('applies custom className', () => {
    render(<TextInput {...defaultProps} className="custom-class" />);
    expect(screen.getByRole('textbox').parentElement).toHaveClass('custom-class');
  });
});
