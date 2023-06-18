import { Work } from '@/models'
import { Box, Divider } from '@mui/material'
import { WorkItem } from './work-item'

export interface WorkListProps {
  workList: Work[]
}

export function WorkList({ workList }: WorkListProps) {
  return (
    <Box>
      {workList.map((work) => (
        <Box key={work.id} mb={2}>
          <Box borderRadius={4} mb={2}>
            <WorkItem post={work} />
          </Box>
          <Divider />
        </Box>
      ))}
    </Box>
  )
}
