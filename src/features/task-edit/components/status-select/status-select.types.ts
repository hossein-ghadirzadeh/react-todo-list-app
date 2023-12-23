import { Status } from '../../../../types'

export const statusItems: Status[] = [
  Status.TODO,
  Status.IN_PROGRESS,
  Status.IN_QA,
  Status.BLOCKED,
  Status.DONE,
  Status.DEPLOYED,
]

export interface StatusSelectProps {
  currentStatus: Status
  onChange: (status: Status) => void
}
