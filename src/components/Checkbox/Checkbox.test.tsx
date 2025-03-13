import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render checkbox with label', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} label="Label" />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should apply "checked" class when checked prop is true', () => {
    render(<Checkbox checked={true} onChange={mockOnChange} label="Label" />);
    const checkbox = screen.getByText('Label').closest('label')?.querySelector('input');
    expect(checkbox).toHaveClass('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('should not call onChange when disabled', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} disabled label="Label" />);
    const checkbox = screen.getByLabelText('Label');
    fireEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('should call onChange with correct value when clicked', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} label="Label" />);
    const checkbox = screen.getByLabelText('Label');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should apply "disabled" class when disabled prop is true', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} disabled label="Label" />);
    const checkbox = screen.getByLabelText('Label').closest('label');
    expect(checkbox).toHaveClass('disabled');
  });

  test('should apply custom className', () => {
    render(
      <Checkbox checked={false} onChange={mockOnChange} className="custom-class" label="Label" />
    );
    const checkbox = screen.getByLabelText('Label').closest('label');
    expect(checkbox).toHaveClass('custom-class');
  });

  test('should render checkbox without label', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} />);
    expect(screen.queryByText('Label')).toBeNull();
  });
});
