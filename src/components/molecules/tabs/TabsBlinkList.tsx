import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { CardModel } from '../../../model/CardModel'
import CardsGrid from '../../organisms/cards_grid/CardsGrid'

type Props = {
  data: CardModel[]
}

const useStyles = makeStyles((theme:Theme)=>({
  tabs: {
    color: "green",
    "& .MuiTab-root": {
      textTransform: "none",
      width: "304px",
      height: "39px",
      color: "#6D787E",
      fontSize: "18px",
      borderBottom: "2px solid #E1ECFC",
      "&.Mui-selected": {
        color: "#22C870"
      },
      "&:hover": {
        color: "#22C870"
      }
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#2CE080"
    }
  },

  mainContainer: {
    paddingLeft: "18%"
  }
}))

const TabsBlinkList = (props: Props) => {
  const classes = useStyles()
  const [value, setValue] = useState<string>("one")
  const [curr, setCurr] = useState<CardModel[]>([])
  const [finish, setFinish] = useState<CardModel[]>([])

  useEffect(()=>{
    const currentContent = props.data.filter((val)=>(val.state==="added to lib"))
    const finishContent = props.data.filter((val)=>(val.state==="Finished"))
    setCurr(currentContent)
    setFinish(finishContent)
    console.log(props.data)
    console.log(curr)
    console.log(finish)
  }, [props.data])

  const handleChange = (card: CardModel)=>{
    let newCurrData:CardModel[], newFinishData:CardModel[]
    if(card.state === "added to lib"){
      newCurrData = curr.filter((val)=>(val.id !== card.id))
      newFinishData = finish
      newFinishData.push(card)
    }
    else{
      newFinishData = finish.filter((val)=>(val.id !== card.id))
      newCurrData = curr
      newCurrData.push(card)
    }
    setCurr(newCurrData)
    setFinish(newFinishData)
  }

  return (
    <TabContext value={value}>
      <Box className={classes.mainContainer}>
        <Tabs
        className={classes.tabs}
        aria-label="secondary tabs example"
        onChange={(event: React.SyntheticEvent, newValue: string)=>setValue(newValue)}
        value={value}>
            <Tab value="one" label="Currently Reading"/>
            <Tab value="two" label="Finished"/>
        </Tabs>
      </Box>
      <TabPanel value="one">
        <CardsGrid data={curr} onNavChange={(card: CardModel)=>handleChange(card)}/>
      </TabPanel>
      <TabPanel value="two">
        <CardsGrid data={finish} onNavChange={(card: CardModel)=>handleChange(card)}/>
      </TabPanel>
    </TabContext>
  )
}

export default TabsBlinkList