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
import { useAuth0 } from "@auth0/auth0-react"

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
        alignSelf: "center",
        "&:hover": {
            cursor: "pointer"
        }
    },
    appBar: {
        "&.MuiAppBar-root": {
            height: "86px",
            backgroundColor: "#FFFFFF",
            padding: "0 17%",
            boxShadow: "none"
        }
    },
    accountDropDown: {
        "&.MuiBox-root": {
            fontFamily: "Cera Pro",
            position: "absolute",
            padding: "8px 0",
            backgroundColor: "#F1F6F4",

            "& .MuiLink-root": {
                cursor: "pointer",
                padding: "10px 22px",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "24px",
                color: "#6D787E",
                "&:hover": {
                    color: "#116BE9"
                }
            }
        }
    }
}))

const Header = (props: Props) => {
    const [explore, setExplore] = useState<boolean>(false)
    const [accountMenu, setAccountMenu] = useState<boolean>(false)
    const classes = useStyles(explore)

    const handleExploreClick = ()=>{
        setExplore((explore)=>!explore)
        props.handleExplore()
    }
    const navigate = useNavigate()

    const {user, isAuthenticated, isLoading, logout, loginWithRedirect} = useAuth0()
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
                <Box>
                    {   (!isLoading && isAuthenticated)?
                    <Box className={classes.box}>
                        <AvatarUser children={user?.name?.charAt(0)+""}/>
                        {accountMenu? <KeyboardArrowUpIcon className={classes.icon} onClick={()=>{setAccountMenu((accountMenu)=>!accountMenu)}}/>
                        : <KeyboardArrowDownIcon className={classes.icon} onClick={()=>{setAccountMenu((accountMenu)=>!accountMenu)}}/>}
                    </Box>
                    :<Box className={classes.box}>
                        <Typography sx={{
                            marginTop: "2px",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: '20px',
                            color: "#03314B"
                        }}>Account</Typography>
                        {accountMenu? <KeyboardArrowUpIcon className={classes.icon} onClick={()=>{setAccountMenu((accountMenu)=>!accountMenu)}}/>
                        : <KeyboardArrowDownIcon className={classes.icon} onClick={()=>{setAccountMenu((accountMenu)=>!accountMenu)}}/>}
                    </Box>
                    }

                    { accountMenu &&
                    <Box className={classes.accountDropDown}>
                        { (!isLoading && isAuthenticated)?
                            <Link onClick={() => {logout({ returnTo: window.location.origin })}}>Logout</Link>
                            :<Link onClick={() => loginWithRedirect()}>Login</Link>
                        }
                    </Box>
                    }
                </Box>
            </Toolbar>
        </Box>
    </AppBar>
  )
}

export default Header