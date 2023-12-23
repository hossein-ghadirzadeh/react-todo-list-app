import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import InputBase from '@mui/material/InputBase'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import useAllowedStatuses from '../../../../hooks/useAllowedStatuses'
import { theme } from '../../../../theme'
import { Status } from '../../../../types'
import { StatusSelectProps } from './status-select.types'

const MenuProps = {
  PaperProps: {
    style: {
      borderRadius: 16,
      boxShadow:
        '0px 10px 32px -4px rgba(0, 0, 0, 0.10), 0px 6px 14px -6px rgba(0, 0, 0, 0.12)',
      color: theme.palette.common.black,
    },
  },
}

const MuiInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 28,
    fontSize: 16,
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: '10px 16px',
    boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
    '&:focus': {
      borderRadius: 28,
    },
  },
}))

export const StatusSelect = ({
  currentStatus = Status.TODO,
  onChange,
}: StatusSelectProps) => {
  const allowedStatuses = useAllowedStatuses(currentStatus)

  const [status, setStatus] = useState<Status>(currentStatus)
  const handleChange = (event: SelectChangeEvent<Status>) => {
    const {
      target: { value },
    } = event
    setStatus(value as Status)
    onChange(value as Status)
  }

  return (
    <Select
      fullWidth
      value={status}
      onChange={handleChange}
      input={<MuiInputBase />}
      IconComponent={KeyboardArrowDownIcon}
      MenuProps={MenuProps}
    >
      {allowedStatuses.map((statusItem: Status) => (
        <MenuItem key={statusItem} value={statusItem} sx={{ padding: '16px' }}>
          {statusItem}
        </MenuItem>
      ))}
    </Select>
  )
}
