import React from 'react'
import './Nav.css'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StarIcon from '@mui/icons-material/Star';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
const Nav = () => {
    const [activeNav,setActiveNav]=useState('#');

  return (
    <nav >
        <a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav==='#'?'active':''} ><HomeIcon/></a>
        <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav==='#about'?'active':''}><AccountCircleIcon/></a>
        <a href="#skills" onClick={()=>{setActiveNav('#skills')}} className={activeNav==='#skills'?'active':''}><StarIcon/></a>
        
        <a href="#education" onClick={()=>{setActiveNav('#education')}} className={activeNav==='#education'?'active':''} ><SchoolIcon/></a>
        <a href="#projects" onClick={()=>{setActiveNav('#projects')}} className={activeNav==='#projects'?'active':''}><LocalLibraryIcon/></a>
        
        
        
        
        <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav==='#contact'?'active':''}><ContactsIcon/></a>
    </nav>
  )
}

export default Nav