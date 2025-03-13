import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select, { SelectProps } from './Select';

const defaultProps: SelectProps = {
  label: 'Choose an option',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  value: '',
  onChange: jest.fn(),
  isOpen: false,
  onFocus: jest.fn(),
  onBlur: jest.fn(),
  variant: 'standard',
  error: false,
  disabled: false,
  helperText: 'helper text',
  required: false,
};

describe('Select Component', () => {
  test('renders label correctly', () => {
    render(<Select {...defaultProps} />);
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  test('renders options correctly', () => {
    render(<Select {...defaultProps} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveTextContent('Option 1');
    expect(selectElement).toHaveTextContent('Option 2');
    expect(selectElement).toHaveTextContent('Option 3');
  });

  test('displays selected value', () => {
    render(<Select {...defaultProps} value="2" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue('2');
  });

  test('calls onChange when option is selected', () => {
    render(<Select {...defaultProps} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '1' } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  test('calls onFocus and onBlur when input is focused and blurred', () => {
    render(<Select {...defaultProps} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    expect(defaultProps.onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(defaultProps.onBlur).toHaveBeenCalled();
  });

  test('applies error styles when error is true', () => {
    render(<Select {...defaultProps} error={true} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('errorBorder');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Select {...defaultProps} disabled={true} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  test('renders helperText when error is true', () => {
    render(<Select {...defaultProps} error={true} helperText="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('renders required indicator when required is true', () => {
    render(<Select {...defaultProps} required={true} />);
    const label = screen.getByText(/Choose an option\*/i);
    expect(label).toHaveTextContent('*');
  });

  test('applies correct variant styles', () => {
    const { rerender } = render(<Select {...defaultProps} variant="standard" />);
    let selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('standard');

    rerender(<Select {...defaultProps} variant="filled" />);
    selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('filled');

    rerender(<Select {...defaultProps} variant="outlined" />);
    selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('outlined');
  });
});
