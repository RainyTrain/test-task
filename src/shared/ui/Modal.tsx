import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

interface ModalWindowProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export default function ModalWindow(props: ModalWindowProps) {
  const { handleClose, isOpen, children } = props;
  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            ...style,
            outline: 'none',
            '@media (max-width: 600px)': {
              width: 'calc(100% - 40px)',
              padding: '10px',
            },
          }}
          width="50%">
          {children}
        </Box>
      </Modal>
    </div>
  );
}
