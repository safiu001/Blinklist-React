import Button from '@mui/material/Button'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardModel } from '../../../model/CardModel'

type Props = {
  bookData?: CardModel
}

const ButtonBook = (props: Props) => {
  const navigate = useNavigate()

  const handleClick = ()=>{
    (async ()=>{
      if(props.bookData !== undefined){
        await axios.put(`http://localhost:3000/books/${props.bookData.id}`, {
          ...props.bookData,
          state: "Finished"
        });
        navigate("/")
      }
    })()
  }
  return (
    <Button variant="contained" sx={{
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
        width: "170px",
        height: "44px",
        backgroundColor: "#2CE080",
        color: "#03314B",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "#00C263"
        }
    }} onClick={()=>handleClick}>Finished Reading</Button>
  )
}

export default ButtonBook