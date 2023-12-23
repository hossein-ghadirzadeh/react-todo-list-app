import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../../../../../../../../components/menu'
import { Modal } from '../../../../../../../../components/modal'
import { TaskMenuProps } from './task-menu.types'
import { TaskHistory } from '../task-history'

export const TaskMenu = ({ taskId }: TaskMenuProps) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openHistoryModal, setOpenHistoryModal] = useState<boolean>(false)
  const open = Boolean(anchorEl)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <div>
        <IconButton
          aria-label="more"
          id="task-menu-button"
          aria-controls={open ? 'task-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleOpenMenu}
        >
          <MoreVertIcon sx={{ fontSize: '24px' }} />
        </IconButton>
        <Menu
          id="task-menu"
          MenuListProps={{
            'aria-labelledby': 'task-menu-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => {
              setOpenHistoryModal(true)
              setAnchorEl(null)
            }}
            disableRipple
          >
            <EventOutlinedIcon />
            Task History
          </MenuItem>
          <MenuItem
            onClick={() => navigate(`/task/${taskId}/edit`)}
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
        </Menu>
      </div>
      <Modal
        open={openHistoryModal}
        handleClose={() => setOpenHistoryModal(false)}
      >
        <TaskHistory taskId={taskId} />
      </Modal>
    </>
  )
}
