import { InputAdornment } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel'
import React from 'react'

type Props = {
  onSearch?: (query:string)=>void
}

const SearchBar = (props: Props) => {

  const handleSearch = (query:string)=>{
    if(props.onSearch !== undefined){
      props.onSearch(query)
    }
  }

  return (
    <FormControl sx={{
        width: "598px",
        paddingLeft: "17%",
        marginTop: "58px",
        marginBottom: "80px"
        }}>
        <Input
        sx={{
          fontFamily: "Cera Pro",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
          color: "black",
          
          // '& .MuiInput-input::placeholder': {
          //     color: "#6D787E"
          // },

          "&:after": {
            borderBottom: "2px solid rgba(0, 0, 0, 0.87)"
          },

          "&:before": {
            borderBottom: "2px solid #6D787E"
          }
        }}
        placeholder="Search by title or author"
        startAdornment={
            <InputAdornment position='start'>
                <SearchIcon sx={{
                  color: "#3A4649"
                }}/>
            </InputAdornment>
        }
        onChange={(event)=>handleSearch(event.target.value)}/>
    </FormControl>
  )
}

export default SearchBar