import { Status } from '../../../../types'

export interface StatusSelectProps {
  currentStatus: Status
  onChange: (status: Status) => void
}
