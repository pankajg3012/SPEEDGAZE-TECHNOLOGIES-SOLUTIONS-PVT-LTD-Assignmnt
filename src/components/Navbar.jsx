import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Navbar = () => {

 const handleClick =(event)=>{
        event.preventDefault();
        console.log('You clicked a breadcrumb.');
    }
  return (
    <div className='App_nav'>
    <div role="presentation"   onClick={handleClick}  >
    <Breadcrumbs maxItems={100} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Catalog
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Accessories
      </Link>
      <Link underline="hover" color="inherit" href="#">
        New Collection
      </Link>
      <Typography color="text.primary">Belts</Typography>
    </Breadcrumbs>
  </div>
  </div>
  )
}

export default Navbar
