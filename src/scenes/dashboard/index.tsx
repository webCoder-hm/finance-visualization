import { Box, useTheme } from '@mui/material'
import React from 'react'

// type Props = {}

const Dashboard = () => {
  const {palette} = useTheme()
  return (
    <Box color={palette.grey[300]}>Dashboard</Box>
  )
}

export default Dashboard