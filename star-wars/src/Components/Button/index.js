import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({buttonName, link}) =>
    <React.Fragment>
        <button className='button'>
            <Link to={link}>{ buttonName }</Link>
        </button>
    </React.Fragment>

export default Button;