import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';

import { useDarkMode } from './hooks/useDarkMode'

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleHandler = evt => {
    evt.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <header>
      <div className='leftCon'>
        <div className='brandLogoCon'>
          <Link to='/'>
            <StaticImage
              src='../images/evans-logo.png'
              alt='brand-logo'
              layout='constrained'
            />
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
              <a
                href="mailto:evansibok@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className='hire-me'
              >
                <li>Hire Me</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
