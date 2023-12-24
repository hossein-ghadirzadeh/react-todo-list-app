import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import React from 'react'
import { RenderIf } from '../../../../../../../../../../utils/dom'
import { HistoryListItem } from './components/history-list-item'
import { HistoryListProps } from './history-list.types'

export const HistoryList = ({ data }: HistoryListProps) => {
  return (
    <List>
      <RenderIf isTrue={data.length > 0}>
        {data.map((item, index) => {
          const { title, description, status } = item
          let text = ''
          if (status) {
            text += `The task was marked as “${status}”`
          }
          if (title) {
            const titleText = `The title of the task was change to “${title}”`
            text += text ? ` and ${titleText}` : titleText
          }
          if (description) {
            const descriptionText = `The description of the task was change to “${description}”`
            text += text ? ` and ${descriptionText}` : descriptionText
          }

          return (
            <React.Fragment key={index}>
              <HistoryListItem title={text} updatedAt={item.updatedAt} />
              <Divider component="li" />
            </React.Fragment>
          )
        })}
      </RenderIf>
    </List>
  )
}
