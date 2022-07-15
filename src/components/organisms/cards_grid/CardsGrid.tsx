import { Grid, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { CardModel } from '../../../model/CardModel'
import BookCard from '../book_card/BookCard'

type Props = {
    onNavChange?: (card:CardModel)=>void,
    onAdded?: (card:CardModel)=>void,
    category?: boolean,
    data: CardModel[]
}

const useStyles = makeStyles((_theme: Theme)=>({
    mainContainer: {
        padding: "25px 17% 100px 17%"
    }
}))

const CardsGrid = (props: Props) => {
    const [data, setData] = useState<CardModel[]>(props.data)

    const classes = useStyles()

    useEffect(()=>{
        setData(props.data)
    },[props.data])
    
    // click event
    const handleCardClick = (index:number)=>{
        const temp = data
        if(props.onNavChange !== undefined)
            props.onNavChange(data[index])
        if(data[index].state === ""){
            temp[index].state = "added to lib"
        }
        else if(data[index].state === "added to lib"){
            temp[index].state = "Finished"
        }
        else{
            temp[index].state = "added to lib"
        }
        setData(temp)
        if(props.onAdded !== undefined)
            props.onAdded(data[index])
    }

    let category = false
    if(props.category !== undefined){
        category=props.category
    }

  return (
    <Grid container className={classes.mainContainer} spacing={3}>
        {data.map((val, index)=>{
            return (
            <Grid item key={val.id} data-testid={val.id}>
                <BookCard bookData={val} category={category} onClick={()=>handleCardClick(index)}/>
            </Grid>)
        })}
    </Grid>
  )
}

export default CardsGrid