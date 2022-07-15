import Typography from '@mui/material/Typography'
import React from 'react'

type Props = {}

const FooterInfo = (_props: Props) => {
  return <Typography sx={{color: "#6D787E", fontSize: "14px"}} variant={'body2'} component={"pre"}>
    © BlinkList 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
}

export default FooterInfo