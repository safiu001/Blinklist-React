import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import React from 'react'
import FooterInfo from '../../atoms/FooterMap/FooterInfo'
import FooterLeftContent from '../../molecules/FooterMap/FooterLeftContent'
import FooterNav from '../../molecules/FooterMap/FooterNav'

type Props = {}

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: "#F1F6F4",
    padding: "38px 140px 38px 244px"
  },
  flexContainer: {
    display: "flex",

    marginBottom: "44px",


    "& .MuiBox-root": {
      marginRight: "32px"
    }
  }
})

const Footer = (_props: Props) => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer} data-testid={"footer"}>
      <Box className={classes.flexContainer}>
        <FooterLeftContent />
        <FooterNav />
      </Box>
      <FooterInfo />
    </Box>
  )
}

export default Footer