import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import React from 'react'

type Props = {}

const info = [
    {
        title: "Editorial",
        data: ["Book lists", "What is Nonfiction?", "What to read next?", "Benefits of reading"]
    },
    {
        title: "Useful links",
        data: ["Pricing", "Blinkist business", "Gift cards", "Blinkist magaine", "Contact & help"]
    },
    {
        title: "Company",
        data: ["About", "Careers", "partners", "Code of Conduct"]
    }
]

const useStyles = makeStyles((_theme)=>({
    heading: {
        "&.MuiGrid-root": {
            fontFamily: "Cera Pro",
            color: "#03314B",
            fontWeight: "700",
            lineHeight: "24px",
        }
    },
    firstChild: {
        "&.MuiGrid-root": {
            flex: 3
        }
    },
    item: {
        flex: 2,
        color: "#6D787E",
        "& .MuiGrid-item": {
            fontFamily: "Cera Pro",
            fontSize: "16px",
            display: "inline-block",
        }
    },
    mainContainer: {
        "&.MuiGrid-root": {
            flexWrap: "nowrap"
        }
    }
}))

const FooterNav = (_props: Props) => {
    const classes = useStyles()
  return (
  <Grid container className={classes.mainContainer}>
    <Grid container item className={`${classes.firstChild} ${classes.item}`} direction="column" spacing={2}>
        <Grid item className={classes.heading}>{info[0].title}</Grid>
        {info[0].data.map((text, index)=>{
            return <Grid item key={index}>{text}</Grid>
        })}
    </Grid>
    <Grid container item direction="column" className={`${classes.item}`} spacing={2}>
        <Grid item className={classes.heading}>{info[1].title}</Grid>
            {info[1].data.map((text, index)=>{
                return <Grid item key={index}>{text}</Grid>
            })}
    </Grid>
    <Grid container item direction="column" className={`${classes.item}`} spacing={2}>
        <Grid item className={classes.heading}>{info[2].title}</Grid>
            {info[2].data.map((text, index)=>{
                return <Grid item key={index}>{text}</Grid>
            })}
    </Grid>
  </Grid>
  )
}

export default FooterNav