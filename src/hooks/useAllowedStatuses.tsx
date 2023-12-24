import { useEffect, useState } from 'react'
import { Status } from '../types'

interface StatusRules {
  [key: string]: Status[]
}

const statusTransitions: StatusRules = {
  [Status.TODO]: [Status.TODO, Status.IN_PROGRESS],
  [Status.IN_PROGRESS]: [Status.IN_PROGRESS, Status.IN_QA, Status.BLOCKED],
  [Status.IN_QA]: [Status.IN_QA, Status.TODO, Status.DONE],
  [Status.BLOCKED]: [Status.BLOCKED, Status.TODO],
  [Status.DONE]: [Status.DONE, Status.DEPLOYED],
  [Status.DEPLOYED]: [Status.DEPLOYED],
}

const useAllowedStatuses = (currentStatus: Status) => {
  const [allowedStatuses, setAllowedStatuses] = useState<Status[]>([])

  useEffect(() => {
    setAllowedStatuses(statusTransitions[currentStatus] || [])
  }, [currentStatus])

  return allowedStatuses
}

export default useAllowedStatuses
