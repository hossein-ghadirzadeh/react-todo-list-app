import { Status } from '../../../../../../../../types'

export interface StatusChipProps {
  status: Status
}

export type chipColors =
  | 'success'
  | 'secondary'
  | 'error'
  | 'default'
  | 'warning'
  | 'info'
  | 'primary'
