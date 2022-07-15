import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import Cover from '../../atoms/cover_image/Cover'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CardModel } from '../../../model/CardModel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Props = {
    bookData: CardModel,
    category: boolean,
    onClick?: ()=>void
}

const BookCard = (props: Props) => {

  const handleClick = ()=>{
    let temp
    if(props.bookData.state === ""){
      temp = "added to lib"
    }
    else if(props.bookData.state === "added to lib"){
      temp = "Finished"
    }
    else{
      temp = "added to lib"
    }
    (async ()=>{
      await axios.put(`http://localhost:3000/books/${props.bookData.id}`, {
        ...props.bookData,
        state: temp
    });
    })()
    if(props.onClick !== undefined)
      props.onClick()
  }


  let navigate = useNavigate()

  const handleCardClick = ()=>{
    if(props.category){
      navigate(`/books/${props.bookData.id}`)
    }
  }


  const BookCardActions:FC = ()=>{
      if(props.bookData.state === ""){
        return (
          <CardActions sx={{
            display: "block",
            textAlign: "center",
            "&:hover": {
                backgroundColor: "#0365F2",
                "& .MuiButton-root": {
                    color: "#FFFFFF"
                }
            }}}>
            <Button startIcon={<Typography variant="h1" component="span" children={"+"}/>} sx={{
                textTransform: "none",
                color: "#0365F2",
                width: "100%"
            }} onClick={handleClick}>
                Add to Library
            </Button>
          </CardActions>
        )
      }
      else{
      return (
        <Box sx={{padding: "0", margin: "0"}}>
        {
        (!props.category) &&
          <Box sx={{
            display: "block",
            textAlign: "center",
            marginBottom: "16px"
            }}>
            {(props.bookData.state === "added to lib")?
            <Link sx={{
              textDecoration: "none",
              cursor: "pointer",
              fontFamily: "Cera Pro",
              fontWeight: "500"
            }} onClick={handleClick}> Finished Reading</Link>:
            <Link sx={{
              textDecoration: "none",
              cursor: "pointer",
              fontFamily: "Cera Pro",
              fontWeight: "500"
              }} onClick={handleClick}> Read Again</Link>}
          </Box>
          }
        </Box>
      )
    }
  }

  return (
    <Card sx={{ width: "284px", height: "466px" }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia>
            {
                <Cover link={props.bookData.image}/>
            }
        </CardMedia>
        <CardContent>
          <Typography sx={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "23px",
            color: "#03314B",
            marginBottom: "16px"
          }}>
            {props.bookData.title}
          </Typography>
          <Typography sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#6D787E",
            marginBottom: "16px"
          }}>
            {props.bookData.author}
          </Typography>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <AccessTimeIcon sx={{
                    width: "16.67px",
                    height: "16.67px",
                    display: "inline-block",
                    position: "relative",
                    top: "2.5px"
                    }}/>
                <Typography sx={{
                    position: "relative",
                    top: "0px",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#6D787E",
                    display: "inline-block"
                }}> {props.bookData.time}</Typography>
            </div>
            {props.bookData.reads != null && 
            <div>
                <PersonOutlineOutlinedIcon sx={{
                    display: "inline-block",
                    width: "16px",
                    height: "18px",
                    position: "relative",
                    top: "2.5px"
                    }}/>
                <Typography sx={{
                    position: "relative",
                    top: "0px",
                    display: "inline-block",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: '#6D787E'
                }}>{props.bookData.reads} </Typography>
            </div>}
          </Box>
        </CardContent>
      </CardActionArea>
      <BookCardActions />
      {
        props.category && props.bookData.state !== "" &&
      <Box sx={{textAlign: "right", marginRight: "10px", marginBottom: "10px"}}><MoreHorizIcon /></Box>
      }

      {
        props.bookData.state !== "" &&
      <Box sx={{
        backgroundColor: "#E1ECFC",
        width: "283px",
        height: "15px",
        display:"flex",
        justifyContent: "end"
        }}>
        {
          props.bookData.state === "added to lib" &&
          <Box sx={{backgroundColor: "#F1F6F4", width: "195px", height: "15px"}}>
          </Box>
        }
      </Box>
      }
    </Card>
  )
}

export default BookCard