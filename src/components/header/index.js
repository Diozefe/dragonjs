import React, { useCallback } from 'react';
import { 
    FiX, 
    FiMinus,
    FiSquare
} from 'react-icons/fi'

import { remote } from 'electron';
import os from 'os';

import Icon from '../../assets/image/icon/dragonjs.png'

import './style.css'

const Header = (props) => {
    const handleMinimizeWindow = useCallback(() => {
        const window = remote.getCurrentWindow()
    
        window.minimize()
    }, [])

    const handleMaximize = useCallback(() => {
        const window = remote.getCurrentWindow()
    
        const isMacSystem = os.platform() === 'darwin'
        if (isMacSystem) {
          return window.setFullScreen(!window.isFullScreen())
        }
    
        const { width: currentWidth, height: currentHeight } = window.getBounds()
    
        const {
          width: maxWidth,
          height: maxHeight
        } = remote.screen.getPrimaryDisplay().workAreaSize
    
        const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight
    
        if (!isMaximized) {
          window.maximize()
        } else {
          window.unmaximize()
        }
      }, [])
    

    const handleCloseWindow = useCallback(() => {
        const window = remote.getCurrentWindow()
        
        window.close()
    }, [])


    return (
        <header className='header'>
            <img className='iconHeader' src={ Icon } alt='icon' />
            <span className='title'>{ props.title }</span>
            <button className='buttonHeader' onClick={ handleMinimizeWindow }>
                <FiMinus color='#fff' />
            </button>
            <button className='buttonHeader' onClick={ handleMaximize }>
                <FiSquare color='#fff' />
            </button>
            <button className='buttonHeader' onClick={ handleCloseWindow }>
                <FiX color='#fff' />
            </button>
        </header>
    )
}

export default Header;