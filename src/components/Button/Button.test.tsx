import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render button with children', () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test.each([
    ['medium', 'contained'],
    ['small', 'text'],
    ['large', 'outlined'],
  ])('should apply random size (%s) and variant (%s)', (size, variant) => {
    render(
      <Button
        size={size as 'medium' | 'small' | 'large'}
        variant={variant as 'contained' | 'text' | 'outlined'}
        onClick={mockOnClick}
      >
        Click Me
      </Button>
    );
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass(size);
    expect(button).toHaveClass(variant);
  });

  test('should be disabled when disabled prop is true', () => {
    render(
      <Button disabled onClick={mockOnClick}>
        Click Me
      </Button>
    );
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  test('should not be disabled when disabled prop is false', () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).not.toBeDisabled();
  });

  test('should call onClick function when clicked', () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('should apply custom className', () => {
    render(
      <Button className="custom-class" onClick={mockOnClick}>
        Click Me
      </Button>
    );
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('custom-class');
  });
});
