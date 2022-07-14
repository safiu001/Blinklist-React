import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Template from '../components/templates/Template'
import { CardModel } from '../model/CardModel'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button'
import ButtonBook from '../components/molecules/buttons/ButtonBook'
import Link from '@mui/material/Link'
import TabsBook from '../components/molecules/tabs/TabsBook'
import Cover from '../components/atoms/cover_image/Cover'
import { useStyles } from '../Themes/BookTheme'

type Props = {
  bookData?: CardModel
}

const Body:FC = (props: Props)=>{
  const [bookData, setBookData] = useState<CardModel>()
  if(props.bookData !== undefined){
    setBookData(props.bookData)
  }
  const classes = useStyles()
  let {id} = useParams()
  if(id === undefined)
    id = "11"

  useEffect(()=>{
    (async ()=>{
      const response = await axios.get(`http://localhost:3000/books/${id}`)
      const temp = response.data
      setBookData(temp)
    })()
  }, [id])

  return (
    (bookData !== undefined)?
      <Box className={classes.mainContainer}>
      <Typography className={classes.bookComment}>Get the key ideas from</Typography>
      <Box className={classes.flexCoverContainer}>
        <Box className={classes.bodyLeftContainer}>
          <Typography variant="h2" className={classes.bookTitle}>{bookData.title} 2.0</Typography>
          <Typography className={classes.bookCaption}>Turning Your Business into an Enduring Great Company</Typography>
          <Typography className={classes.bookAuthor}>By {bookData.author}</Typography>
          <Box className={classes.bookTimeContainer}>
              <AccessTimeIcon sx={{
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  position: "relative",
                  top: "5px"
                  }}/>
              <Typography sx={{
                  position: "relative",
                  top: "0px",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "17.6px",
                  color: "#6D787E",
                  display: "inline-block"
                }}> {bookData.time}</Typography>
          </Box>
          <Box className={classes.flexLinksContainer}>
            <Button variant="outlined" color={"inherit"} className={classes.readBtn}>Read now</Button>
            <ButtonBook bookData={bookData}/>
            <Box className={classes.linkContainer}>
              <Link className={classes.link}>Send to Kindle</Link>
              <ArrowForwardIcon className={classes.arrowIcon}/>
            </Box>
          </Box>
        </Box>
        <Box>
          <Cover link={bookData.image}/>
        </Box>
      </Box>
      <TabsBook />
      <span className={classes.span}></span>
    </Box>
    : <Box></Box>
  )
}

const Book = (props: Props) => {
  return (<Template children={<Body />}/>)
}

export default Book