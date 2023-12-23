import MUIMenu, { MenuProps } from '@mui/material/Menu'
import { alpha, styled } from '@mui/material/styles'

export const Menu = styled((props: MenuProps) => (
  <MUIMenu
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
