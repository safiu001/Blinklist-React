import { makeStyles } from '@mui/styles'
import React from 'react'

type Props = {
    link: string,
    width?: string,
    height?: string
}

const useStyles = makeStyles({
  logo: {
    alignSelf: "center",
    width: (props:{width:string|undefined, height:string|undefined}) => {
      if(props.width != null && props.width !== undefined){
        return props.width
      }else{
        return "124.09px"
      }
    },
    height: (props:{width:string|undefined, height:string|undefined}) => {
      if(props.height != null && props.height !== undefined){
        return props.height
      }else{
        return "26px"
      }
    }
  }
})

const Logo = (props: Props) => {
  const styleProps = {
    width: props.width,
    height: props.height
  }
  const classes = useStyles(styleProps)
  return <img src={props.link} alt="Blink List Logo" className={classes.logo} />
}

export default Logo