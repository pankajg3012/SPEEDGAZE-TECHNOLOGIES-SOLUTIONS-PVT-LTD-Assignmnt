import React from 'react'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';


 

const SearchInp = () => {
  return (
    <div>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
    <OutlinedInput
      // id="outlined-adornment-password"
      // type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            // onClick={handleClickShowPassword}
            // onMouseDown={handleMouseDownPassword}
            edge="end"
          >
           <SearchIcon className='rounded'/> 
          </IconButton>
        </InputAdornment>
      }
      label="Password"
    />
  </FormControl>
    </div>
  )
}

export default SearchInp
