import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from '../components/Modal/Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWrapper = (args: ModalProps) => {
  const [open, setOpen] = useState(args.isOpen);

  useEffect(() => {
    setOpen(args.isOpen);
  }, [args.isOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal {...args} isOpen={open} onClose={handleClose}>
        <p>Modal content</p>
      </Modal>
    </>
  );
};

export const Default: Story = {
  args: {
    isOpen: false,
    title: 'Modal Title',
    onClose: () => {},
    children: '',
  },
  render: (args) => <ModalWrapper {...args} />,
};
