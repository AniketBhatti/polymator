import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className="header">
            <div className='navbar_main'>
                <div className="menuItems">
                    <div className='logo'>
                        <img src="https://polymator.com/wp-content/uploads/2023/07/polymator-logo.png" alt="" />
                    </div>

                    <div className='menuLinks'>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>

                            <li>
                                <Link to='/about'>About Us</Link>
                            </li>
                            <li>
                                <Link to='/'>Our Work</Link>
                            </li>
                            <li>
                                <Link to='/'>Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
