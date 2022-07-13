import Avatar from '@mui/material/Avatar'
import { makeStyles} from '@mui/styles'
import React from 'react'

type Props = {
  children: string
}

const useStyles = makeStyles({
  root: {
    "&.MuiAvatar-root":{
      backgroundColor: '#69A6E3',
      alignSelf: "center"
    }
  }
})

const AvatarUser = (props: Props) => {
  const classes = useStyles()
  return <Avatar className={classes.root}>{props.children}</Avatar>
}

export default AvatarUser
