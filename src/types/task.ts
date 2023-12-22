export enum Status {
  TODO = 'Todo',
  IN_PROGRESS = 'In Progress',
  IN_QA = 'In QA',
  BLOCKED = 'Blocked',
  DONE = 'Done',
  DEPLOYED = 'Deployed',
}

export type Task = {
  id: number
  title: string
  description: string
  createdAt: string
  status: Status
}
