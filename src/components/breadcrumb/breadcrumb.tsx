import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useTheme } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useLocation } from 'react-router-dom'

export const Breadcrumb = () => {
  const theme = useTheme()
  const { pathname } = useLocation()

  const getTitle = () => {
    if (pathname === '/') {
      return 'Home'
    } else if (pathname.match(/^\/task\/\d+\/edit$/)) {
      return 'Edit'
    } else {
      return 'Unknown'
    }
  }

  return (
    <Breadcrumbs
      sx={{ marginTop: 4 }}
      separator={
        <NavigateNextIcon
          fontSize="small"
          sx={{ color: theme.palette.common.black }}
        />
      }
      aria-label="breadcrumb"
    >
      <Link
        underline="hover"
        color="inherit"
        href="/"
        sx={{ color: theme.palette.common.black, fontSize: '14px' }}
      >
        Task Management
      </Link>

      <Typography sx={{ color: theme.palette.grey[600], fontSize: '14px' }}>
        {getTitle()}
      </Typography>
    </Breadcrumbs>
  )
}
