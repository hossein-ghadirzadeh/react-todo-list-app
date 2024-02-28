import React from 'react'
import { TextField } from '../../../../../../components/text-field'
import { TaskFilterProps } from './task-filter.type'

export const TaskFilter = ({ onChange }: TaskFilterProps) => {
  return (
    <TextField
      label="Please search..."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
      }}
    />
  )
}
