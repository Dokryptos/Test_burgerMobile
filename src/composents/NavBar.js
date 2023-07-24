import React,{ useState } from 'react'
import classNames from 'classnames'
import './Navbar.css'

function NavBar(){
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    return(
        <nav>
            <div className='logo'>Mon logo</div>
            <div className={classNames ('navbar', {'open': openMenu})}>
                <ul>
                    <li><a href='#Accueil'>Accueil</a></li>
                    <li><a href='#services'>Service</a></li>
                    <li><a href='#aboutUs'>About Us</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <button className={classNames ('burger', {'open': openMenu})} onClick={toggleMenu}>
                <span className='burger-bar'></span>
            </button>
        </nav>
    )
}

export default NavBar