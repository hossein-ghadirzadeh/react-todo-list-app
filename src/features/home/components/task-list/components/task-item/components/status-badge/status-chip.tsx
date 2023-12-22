import Chip from '@mui/material/Chip'
import { StatusChipProps, chipColors } from './status-chip.types'
import { Status } from '../../../../../../../../types'

export const StatusChip = ({ status }: StatusChipProps) => {
  const statusColors = {
    [Status.TODO]: 'success',
    [Status.IN_PROGRESS]: 'secondary',
    [Status.BLOCKED]: 'error',
    [Status.IN_QA]: 'default',
    [Status.DONE]: 'warning',
    [Status.DEPLOYED]: 'info',
  }

  const chipColor = statusColors[status] as chipColors

  return chipColor ? (
    <Chip label={status} size="small" color={chipColor} variant="outlined" />
  ) : null
}
