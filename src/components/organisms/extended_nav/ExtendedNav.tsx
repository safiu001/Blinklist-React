import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import TabContext from '@mui/lab/TabContext'
import { Theme } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import makeStyles from '@mui/styles/makeStyles'
import IconImage from '../../atoms/icons/IconImage'
import TabPanel from '@mui/lab/TabPanel'
import { useNavigate } from 'react-router-dom'

type Props = {}

interface jsonIconType{
    id: number,
    image: string,
    link: string
}

const useStyles = makeStyles((theme:Theme)=>({
    tabs: {
        "& .MuiTab-root": {
          textTransform: "none",
          color: "#6D787E",
          fontSize: "16px",
          paddingLeft: "0px",
          paddingRight: "10%",
          "&.Mui-selected": {
            color: "#116BE9"
          },
          "& .MuiTouchRipple-root": {
            display: "none"
          }
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "transparent"
        }
      },
    hr: {
        height: "1px",
        width: "940px",
        backgroundColor: "#042330"
    }
}))

const ExtendedNav:FC = (props: Props) => {
    const [value, setValue] = useState("one")
    const classes = useStyles()
    let navigate = useNavigate()

    const [data, setData] = useState<jsonIconType[]>([])
    useEffect(()=> {
        (async ()=>{
            const response = await axios.get("http://localhost:3000/exploreIcons")
            setData(response.data)
        })()
    }, [])

    const handleNavClick = (val:jsonIconType)=>{
        if(val.link === "Entrepreneurship"){
            navigate("/category/Entrepreneurship")
        }else{
            console.log(val.link)
        }
    }

  return (
    <Box sx={{backgroundColor: "#F1F6F4", padding: "10px 17%"}}>
        <TabContext value={value}>
            <Box>
                <Tabs
                className={classes.tabs}
                aria-label="secondary tabs example"
                onChange={(event: React.SyntheticEvent, newValue: string)=>setValue(newValue)}
                value={value}>
                    <Tab value="one" label="Explore by category"/>
                    <Tab value="two" label="See recently added titles"/>
                    <Tab value="three" label="See popular titles"/>
                </Tabs>
            </Box>
            <Box className={classes.hr}/>
            <TabPanel value="one" sx={{padding: 0}}>
                <Grid container>
                    {data.map((val)=>{return (
                        <Grid item key={val.id} xs={12} sm={6} md={4}>
                            <Box onClick={()=>handleNavClick(val)} sx={{
                                    display: 'flex',
                                    flexDirection: "row",
                                    justifyContent: "start",
                                    marginTop: "23px",
                                    "&:hover": {
                                        filter: "invert(26%) sepia(76%) saturate(4557%) hue-rotate(210deg) brightness(97%) contrast(98%)",
                                        cursor: "pointer"
                                    }
                                }} data-testid={val.id}>
                                <IconImage link={val.image}/>
                                <Typography sx={{
                                    marginLeft: "10px",
                                    lineHeight: "20px",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    color: "#6D787E"
                                }}>{val.link}</Typography>
                            </Box>
                        </Grid>
                    )})}
                </Grid>
            </TabPanel>
            <TabPanel value="two" sx={{padding: 0}}>
                    Finished
            </TabPanel>
            <TabPanel value="three" sx={{padding: 0}}>
                    Finished
            </TabPanel>
        </TabContext>
    </Box>
  )
}

export default ExtendedNav