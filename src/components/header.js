import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';

import { useDarkMode } from './hooks/useDarkMode'
import HireMeButton from './HireMeButton/HireMeButton';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)
  const lightLogo = '../images/evans-logo-light.png'
  const darkLogo = '../images/evans-logo-dark.png'

  const toggleHandler = evt => {
    evt.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <header>
      <div className='leftCon'>
        <div className='brandLogoCon'>
          <Link to='/'>
            {darkMode ? (<StaticImage
              src={darkLogo}
              alt='brand-logo'
              layout='constrained'
            />) : (<StaticImage
              src={lightLogo}
              alt='brand-logo'
              layout='constrained'
            />)}
          </Link>
        </div>

        <div className="right-con">
          <div className='toggleMenu'>
            <div className='toggleCon'>
              <button className='dark-mode__toggle' onClick={toggleHandler}>
                <div className={darkMode ? 'toggle toggled' : 'toggle'} />
              </button>
            </div>
          </div>

          <nav>
            <ul>
              <HireMeButton />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
