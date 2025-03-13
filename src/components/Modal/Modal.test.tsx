import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render modal when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} children="Modal Content" />);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('should not render modal when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={mockOnClose} children="Modal Content" />);
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('should render title when title prop is passed', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal Title" children="Modal Content" />
    );
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });

  test('should not render title when title prop is not passed', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} children="Modal Content" />);
    expect(screen.queryByText('Modal Title')).toBeNull();
  });

  test('should close modal when close button is clicked', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} children="Modal Content" />);
    const closeButton = screen.getByRole('button', { name: '×' });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('should not close modal when modal content is clicked', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} children="Modal Content" />);
    const modalContent = screen.getByText('Modal Content');
    fireEvent.click(modalContent);
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test('should apply custom className', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} className="custom" children="Modal Content" />
    );
    const modal = screen.getByText('Modal Content').closest('.modal');
    expect(modal).toHaveClass('custom');
  });
});
