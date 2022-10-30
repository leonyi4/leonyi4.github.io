import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Nyi Nyein Aung</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/leonyi4"><GitHubIcon/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nyi Nyein Aung</small>
      </div>
    </footer>
  )
}

export default Footer