export interface ModalProps {
  children: React.ReactNode
  handleClose: () => void
  open: boolean
  height?: string
}
