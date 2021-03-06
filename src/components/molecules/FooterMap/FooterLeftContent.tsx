import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import Box from '@mui/system/Box'
import React from 'react'
import Logo from '../../atoms/logo/Logo'

type Props = {}

const useStyles = makeStyles((theme:Theme)=>({
  box: {
    "&.MuiBox-root": {
      minWidth: "360px"
      // 378
    },
    "& .MuiTypography-root": {
      fontSize: "24px",
      lineHeight: "32px",
      color: "#0365F2",
      fontWeight: "500",
      marginTop: "30px"
    }
  }
}))

const FooterLeftContent = (props: Props) => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Logo link="/assets/pictures/BlinkList.png" width="99.1px" height="24px"/>
      <Typography>Big ideas in small packages
Start learnign now</Typography>
    </Box>
  )
}

export default FooterLeftContent