import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MUIListItem from '@mui/material/ListItem'
import MUIListItemText, { ListItemTextProps } from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import { Stack } from '@mui/system'
import { HistoryListItemProps } from './history-list-item.types'

export const ListItemText = styled((props: ListItemTextProps) => (
  <MUIListItemText {...props} />
))(({ theme }) => ({
  '& .MuiListItemText-primary': {
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: '16px',
  },
}))

export const HistoryListItem = ({ title, updatedAt }: HistoryListItemProps) => {
  const theme = useTheme()

  return (
    <MUIListItem sx={{ padding: '16px 0' }}>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="subtitle1"
            fontSize="12px"
            color={theme.palette.grey[400]}
          >
            <Stack direction="row" gap={0.5} alignItems="center">
              <AccessTimeIcon
                sx={{ color: theme.palette.grey[400], fontSize: '16px' }}
              />
              {updatedAt}
            </Stack>
          </Typography>
        }
      />
    </MUIListItem>
  )
}
