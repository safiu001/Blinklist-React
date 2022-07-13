import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Logo from '../../atoms/logo/Logo'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AvatarUser from '../../atoms/avatars/AvatarUser'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

type Props = {
    handleExplore: ()=>void
}

const useStyles = makeStyles((theme:Theme)=>({
    box: {
        "&.MuiBox-root": {
            display: "flex",
            height: "100%"
        },
    },
    left: {
        justifyContent: "space-between",
        width: "422px",
        "& .MuiTypography-root": {
            color: "#03314B",
            alignSelf: "center",
            textDecoration: "none",
            cursor: "pointer"
        }
    },
    icon: {
        color: "#042330",
        alignSelf: "center"
    },
    appBar: {
        "&.MuiAppBar-root": {
            height: "86px",
            backgroundColor: "#FFFFFF",
            padding: "0 17%",
            boxShadow: "none"
        }
    }
}))

const Header = (props: Props) => {
    const [explore, setExplore] = useState<boolean>(false)
    const classes = useStyles(explore)

    const handleExploreClick = ()=>{
        setExplore((explore)=>!explore)
        props.handleExplore()
    }
    const navigate = useNavigate()
  return (
    <AppBar className={classes.appBar} position={"static"}>
        <Box className={classes.box}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between", width:"100%"}}>
                <Box className={`${classes.left} ${classes.box}`}>
                    <Logo link={'/assets/pictures/Blinklist.png'}/>
                    <SearchIcon className={classes.icon}/>
                    <Link sx={{display: "flex", borderBottom: explore?"1px solid #2CE080":"none"}} onClick={handleExploreClick}>
                        <Typography>Explore</Typography>
                        {explore? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </Link>
                    <Link onClick={()=>{navigate("/")}}>
                        <Typography>My Library</Typography>
                    </Link>
                </Box>
                <Box className={classes.box}>
                    <AvatarUser children={"A"}></AvatarUser>
                    <KeyboardArrowDownIcon className={classes.icon}/>
                </Box>
            </Toolbar>
        </Box>
    </AppBar>
  )
}

export default Header