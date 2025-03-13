import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';
import '@testing-library/jest-dom';

describe('Switch Component', () => {
  test('should render the switch with the correct label', () => {
    render(<Switch checked={false} onChange={() => {}} label="Enable feature" />);
    expect(screen.getByText('Enable feature')).toBeInTheDocument();
  });

  test('should apply the "checked" class when checked is true', () => {
    render(<Switch checked={true} onChange={() => {}} />);
    const switchElement = screen.getByTestId('switch').querySelector('.slider');
    expect(switchElement).toHaveClass('checked');
  });

  test('should apply the "disabled" class when disabled is true', () => {
    render(<Switch checked={false} onChange={() => {}} disabled />);
    const switchElement = screen.getByTestId('switch').querySelector('.slider');
    expect(switchElement).toHaveClass('disabled');
  });

  test('should call onChange with the correct value when clicked', () => {
    const mockOnChange = jest.fn();
    render(<Switch checked={false} onChange={mockOnChange} />);
    const switchElement = screen.getByTestId('switch').querySelector('.slider');
    if (switchElement) {
      fireEvent.click(switchElement);
      expect(mockOnChange).toHaveBeenCalledWith(true);
    }
  });

  test('should not render label when label prop is not passed', () => {
    render(<Switch checked={false} onChange={() => {}} />);
    const label = screen.queryByText('Enable feature');
    expect(label).toBeNull();
  });
});
