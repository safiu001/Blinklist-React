import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import ExtendedNav from '../organisms/extended_nav/ExtendedNav'
import Footer from '../organisms/footer/Footer'
import Header from '../organisms/headers/Header'

type Props = {
  children: JSX.Element,
  height?: string
}

const useStyles = makeStyles((_theme: Theme)=>({
  modal: {
    position: "absolute",
    backgroundColor: "rgba(157, 163, 166, 0.45)",
    width: "100%",
    zIndex: "1"
  }
}))

const Template = (props: Props) => {
  const [explore, setExplore] = useState<boolean>(false)
  const classes = useStyles()

  const handleExplore = ()=>{
    setExplore((prevExplore)=>!prevExplore)
  }

  return (
    <div>
      <Header handleExplore={handleExplore}/>
      {explore && 
      <Box className={classes.modal} sx={{height: "100%"}}>
        <ExtendedNav />
      </Box>
      }
      {props.children}
      <Footer />
    </div>
  )
}

export default Template