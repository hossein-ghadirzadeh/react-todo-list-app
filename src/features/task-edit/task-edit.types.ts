import { Status, Task } from '../../types'

export const initialTaskForEdit: Task = {
  id: 0,
  title: '',
  description: '',
  status: Status.TODO,
}
