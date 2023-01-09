import React from 'react'
import resume from '../../assets/NyiNyeinAungResume2023.pdf'

const ContactMe = () => {
  return (
    <div className="ctme">
        <a href={resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default ContactMe