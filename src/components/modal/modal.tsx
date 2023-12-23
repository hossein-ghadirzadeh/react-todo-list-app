import Box from '@mui/material/Box'
import MUIModal from '@mui/material/Modal'
import { ModalProps } from './modal.types'

const style = {
  position: 'absolute',
  top: '46%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: '483px' },
  minHeight: '600px',
  bgcolor: 'background.paper',
  p: { xs: '8px', sm: '16px', md: '32px' },
  borderRadius: '16px',
  boxShadow: '0px 8px 48px -12px rgba(16, 24, 40, 0.15)',
  border: 'none',
  outline: 'none',
}

export const Modal = ({ children, open, handleClose }: ModalProps) => {
  return (
    <MUIModal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>{children}</Box>
    </MUIModal>
  )
}
