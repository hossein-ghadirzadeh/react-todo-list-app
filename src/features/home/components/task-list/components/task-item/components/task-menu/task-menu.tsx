import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { MenuProps } from '@mui/material/Menu'
import { alpha, styled, useTheme } from '@mui/material/styles'
import React, { useState } from 'react'
import { TaskMenuProps } from './task-menu.types'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '16px',
    width: '200px',
    color: theme.palette.common.black,
    boxShadow:
      '0px 10px 32px -4px rgba(0, 0, 0, 0.10), 0px 6px 14px -6px rgba(0, 0, 0, 0.12)',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      padding: '16px',
      fontSize: '16px',
      '& .MuiSvgIcon-root': {
        color: theme.palette.grey[400],
        marginRight: theme.spacing(1),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export const TaskMenu = ({ taskId }: TaskMenuProps) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="task-menu-button"
        aria-controls={open ? 'task-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ fontSize: '24px' }} />
      </IconButton>
      <StyledMenu
        id="task-menu"
        MenuListProps={{
          'aria-labelledby': 'task-menu-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => console.log('Task History with ID = ', taskId)}
          disableRipple
        >
          <EventOutlinedIcon />
          Task History
        </MenuItem>
        <MenuItem
          onClick={() => console.log('Edit Task with ID = ', taskId)}
          disableRipple
        >
          <EditOutlinedIcon />
          Edit Task
        </MenuItem>
        <MenuItem
          onClick={() => console.log('Delete Task with ID = ', taskId)}
          disableRipple
          sx={{ color: theme.palette.error.dark }}
        >
          <DeleteOutlineIcon />
          Delete Task
        </MenuItem>
      </StyledMenu>
    </div>
  )
}
