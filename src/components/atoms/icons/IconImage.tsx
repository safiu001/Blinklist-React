import React from 'react'

type Props = {
  link: string
}

const IconImage = (props: Props) => {
  return <img src={props.link} alt="Icon"/>
}

export default IconImage