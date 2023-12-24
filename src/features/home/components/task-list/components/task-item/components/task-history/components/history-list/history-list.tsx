import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import { HistoryListItem } from './components/history-list-item'
import { RenderIf } from '../../../../../../../../../../utils/dom'
import React from 'react'

interface HistoryListProps {
  data: Array<{ title: string; updatedAt: string }>
}

export const HistoryList = ({ data }: HistoryListProps) => {
  return (
    <List>
      <RenderIf isTrue={data.length > 0}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <HistoryListItem title={item.title} updatedAt={item.updatedAt} />
            <Divider component="li" />
          </React.Fragment>
        ))}
      </RenderIf>
    </List>
  )
}
