import { useState } from 'react'
import { Link } from 'react-router-dom'
import DiamondIcon from '@mui/icons-material/Diamond';
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

// type Props = {}

const Navbar = () => {
  // 获取全局主题色 theme.ts
  const { palette } =  useTheme()
  const [selected, setSelected] = useState("dashboard")
  return (
    <FlexBetween 
      mb="0.25rem" 
      p="0.5rem 0rem" 
      color={palette.grey[500]}
    >
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <DiamondIcon sx={{ fontSize: "28px" }}/>
        <Typography variant='h4' fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{"&:hover": {color: palette.primary[100]}}}>
          <Link to="/" onClick={() => setSelected("dashboard")} style={{
            color: selected === "dashboard" ? "inherit" : palette.grey[700],
            textDecoration: "inherit"
          }}>
            dashboard
          </Link>
        </Box>
        <Box sx={{"&:hover": {color: palette.primary[100]}}}>
          <Link to="/predictions" onClick={() => setSelected("predictions")} style={{
            color: selected === "predictions" ? "inherit" : palette.grey[700],
            textDecoration: "inherit"
          }}>
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar