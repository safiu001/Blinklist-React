import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import TabsBlinkList from '../components/molecules/tabs/TabsBlinkList'
import Template from '../components/templates/Template'
import { CardModel } from '../model/CardModel'

type Props = {}

const useStyles = makeStyles((theme: Theme)=>({
  heading: {
    paddingLeft: "19%",
    "&.MuiTypography-root": {
      marginTop: "59px",
      marginBottom: "45px",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B"
    }
  }
}))

const Body:FC = (props: Props) => {
  const [data, setData] = useState<CardModel[]>([])

  useEffect(()=>{
      (async ()=>{
          const response = await axios.get("http://localhost:3000/books")
          setData(response.data)
      })()
  }, [])


  const classes = useStyles()

  return (
    <Box>
      <Typography variant="h1" className={classes.heading}>My Library</Typography>
      <TabsBlinkList data={data}/>
    </Box>
  )
}

const Home = (props: Props) => {
  return <Template children={<Body />}/>
}

export default Home